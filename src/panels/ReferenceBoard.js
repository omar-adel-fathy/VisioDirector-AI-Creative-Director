// ═══════════════════════════════════════════════════════════
// Panel 3: Reference Board
// ═══════════════════════════════════════════════════════════

import { getKeywordsForConcept, AGENT_MESSAGES } from '../utils/mockData.js';
import { typewriterMarkdown, staggerReveal, slideUp } from '../utils/animations.js';

export function renderReferenceBoard(container, state, onComplete) {
    const selectedConceptIndices = Array.from(state.selectedConcepts || []);
    const selectedConcepts = selectedConceptIndices.map(i => state.concepts[i]);

    if (!state.uploadedRefs) {
        state.uploadedRefs = {};
    }

    container.innerHTML = `
    <div class="panel fade-in">
      <div class="panel-header">
        <span class="panel-step-badge">✦ Step 3</span>
        <h1 class="panel-title">Reference Board</h1>
        <p class="panel-description">Find the perfect mood reference images on Pinterest using these curated keywords.</p>
      </div>

      <!-- Agent Message -->
      <div class="agent-message slide-up">
        <div class="agent-avatar">🔎</div>
        <div class="agent-content">
          <div class="agent-name">VisioDirector AI</div>
          <div class="agent-text" id="ref-text"></div>
        </div>
      </div>

      <!-- Keywords per concept -->
      <div id="keywords-sections">
        ${selectedConcepts.map((concept, ci) => renderConceptKeywords(concept, ci)).join('')}
      </div>

      <!-- Upload Section -->
      <div class="section" style="margin-top: var(--space-xl);">
        <h3 class="section-title">📎 Reference Images</h3>
        <p style="font-size: 0.88rem; color: var(--text-tertiary); margin-bottom: var(--space-lg);">
          Grab images from Pinterest using the keywords above, then drop them here. These references will be paired with your AI prompts.
        </p>
        
        <div class="upload-zone" id="upload-zone">
          <div class="upload-zone-icon">📁</div>
          <div class="upload-zone-text">Drop reference images here</div>
          <div class="upload-zone-hint">or click to browse · PNG, JPG up to 10MB</div>
          <input type="file" id="file-input" multiple accept="image/*" style="display: none;" />
        </div>

        <div class="ref-images-grid" id="ref-images-grid" style="margin-top: var(--space-lg);"></div>
      </div>

      <!-- Continue -->
      <div style="display: flex; justify-content: flex-end; margin-top: var(--space-xl);">
        <button class="btn btn-primary btn-lg" id="continue-ref-btn">
          <span>→</span> Build Prompts
        </button>
      </div>
    </div>
  `;

    // Typewriter
    const textEl = container.querySelector('#ref-text');
    typewriterMarkdown(textEl, AGENT_MESSAGES.referencesIntro, 12);

    // Stagger reveal keyword sections
    setTimeout(() => {
        staggerReveal(container.querySelector('#keywords-sections'), '.keyword-section', 150);
    }, 300);

    // File upload handling
    const uploadZone = container.querySelector('#upload-zone');
    const fileInput = container.querySelector('#file-input');
    const imagesGrid = container.querySelector('#ref-images-grid');

    uploadZone.addEventListener('click', () => fileInput.click());

    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.style.borderColor = 'var(--accent-primary)';
        uploadZone.style.background = 'var(--accent-glow)';
    });

    uploadZone.addEventListener('dragleave', () => {
        uploadZone.style.borderColor = '';
        uploadZone.style.background = '';
    });

    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.style.borderColor = '';
        uploadZone.style.background = '';
        handleFiles(e.dataTransfer.files);
    });

    fileInput.addEventListener('change', () => {
        handleFiles(fileInput.files);
    });

    function handleFiles(files) {
        Array.from(files).forEach(file => {
            if (!file.type.startsWith('image/')) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                const id = Date.now() + Math.random();
                if (!state.uploadedRefs.images) state.uploadedRefs.images = [];
                state.uploadedRefs.images.push({ id, src: e.target.result, name: file.name });
                renderUploadedImages();
            };
            reader.readAsDataURL(file);
        });
    }

    function renderUploadedImages() {
        if (!state.uploadedRefs.images || state.uploadedRefs.images.length === 0) {
            imagesGrid.innerHTML = '';
            return;
        }
        imagesGrid.innerHTML = state.uploadedRefs.images.map(img => `
      <div class="ref-image-card" data-id="${img.id}">
        <img src="${img.src}" alt="${img.name}" />
        <button class="remove-btn" title="Remove">✕</button>
      </div>
    `).join('');

        // Remove handlers
        imagesGrid.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const card = btn.closest('.ref-image-card');
                const id = parseFloat(card.dataset.id);
                state.uploadedRefs.images = state.uploadedRefs.images.filter(img => img.id !== id);
                renderUploadedImages();
            });
        });
    }

    // Render existing images
    renderUploadedImages();

    // Copy keyword to clipboard
    container.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            navigator.clipboard.writeText(chip.textContent.trim()).then(() => {
                const original = chip.innerHTML;
                chip.innerHTML = '✓ Copied!';
                chip.classList.add('selected');
                setTimeout(() => {
                    chip.innerHTML = original;
                    chip.classList.remove('selected');
                }, 1500);
            });
        });
    });

    // Continue button
    container.querySelector('#continue-ref-btn').addEventListener('click', () => onComplete());
}

function renderConceptKeywords(concept, index) {
    const keywords = getKeywordsForConcept(concept.id);
    const categories = [
        { label: '🔑 Primary Search', key: 'primary' },
        { label: '🎭 Mood & Atmosphere', key: 'mood' },
        { label: '🧍 Pose & Composition', key: 'pose' },
        { label: '📌 Reference Style', key: 'reference' },
    ];

    return `
    <div class="card-gradient keyword-section" style="margin-bottom: var(--space-lg); opacity: 0;">
      <div style="display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-lg);">
        <span style="font-size: 1.5rem;">${concept.icon}</span>
        <div>
          <h3 style="margin-bottom: 2px;">Concept ${index + 1}: ${concept.title}</h3>
          <p style="font-size: 0.82rem; margin-bottom: 0;">Pinterest search keywords for this visual direction</p>
        </div>
      </div>

      ${categories.map(cat => `
        <div style="margin-bottom: var(--space-md);">
          <div class="keyword-section-title">${cat.label}</div>
          <div class="keywords-grid">
            ${(keywords[cat.key] || []).map(kw => `
              <span class="chip" title="Click to copy">🔍 ${kw}</span>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
