// ═══════════════════════════════════════════════════════════
// Panel 5: Final Delivery
// ═══════════════════════════════════════════════════════════

import { AGENT_MESSAGES } from '../utils/mockData.js';
import { typewriterMarkdown, staggerReveal, slideUp } from '../utils/animations.js';

export function renderFinalDelivery(container, state) {
    const selectedConceptIndices = Array.from(state.selectedConcepts || []);
    const selectedConcepts = selectedConceptIndices.map(i => state.concepts[i]);
    const brandName = state.brandProfile.name;

    container.innerHTML = `
    <div class="panel fade-in">
      <div class="panel-header">
        <span class="panel-step-badge" style="background: var(--success-glow); border-color: var(--success); color: var(--success);">✓ Step 5</span>
        <h1 class="panel-title">Concept Delivery</h1>
        <p class="panel-description">Your complete visual concept package for ${brandName}. Ready to present to the client.</p>
      </div>

      <!-- Agent Message -->
      <div class="agent-message slide-up" style="border-color: var(--success); background: var(--success-glow);">
        <div class="agent-avatar" style="background: linear-gradient(135deg, #22c55e, #16a34a);">🎯</div>
        <div class="agent-content">
          <div class="agent-name" style="color: var(--success);">VisioDirector AI</div>
          <div class="agent-text" id="delivery-text"></div>
        </div>
      </div>

      <!-- Summary Stats -->
      <div class="grid-3" style="margin-bottom: var(--space-2xl);">
        <div class="card-glass stat-card slide-up stagger-1">
          <div class="stat-value">${selectedConcepts.length}</div>
          <div class="stat-label">Visual Concepts</div>
        </div>
        <div class="card-glass stat-card slide-up stagger-2">
          <div class="stat-value">${selectedConcepts.length * 4}</div>
          <div class="stat-label">Keyword Sets</div>
        </div>
        <div class="card-glass stat-card slide-up stagger-3">
          <div class="stat-value">${selectedConcepts.length}</div>
          <div class="stat-label">AI Prompts</div>
        </div>
      </div>

      <!-- Brand Brief Header -->
      <div class="card-gradient" style="margin-bottom: var(--space-2xl); text-align: center; padding: var(--space-2xl);">
        <div style="font-size: 3rem; margin-bottom: var(--space-md);">
          ${state.brandProfile.avatar}
        </div>
        <h2 style="margin-bottom: var(--space-sm);">${brandName} — Visual Concept Brief</h2>
        <p style="margin-bottom: var(--space-md);">Creative Direction by VisioDirector AI</p>
        <div class="tag-list" style="justify-content: center;">
          <span class="badge badge-accent">iPhone Realism</span>
          <span class="badge badge-accent">NanoAbanan 2</span>
          <span class="badge badge-accent">${state.brandProfile.aesthetic}</span>
        </div>
      </div>

      <!-- Concept Deliverables -->
      <div id="deliverables-grid">
        ${selectedConcepts.map((concept, i) => renderDeliveryCard(concept, i, state)).join('')}
      </div>

      <!-- Final Workflow Summary -->
      <div class="card-glass" style="margin-top: var(--space-2xl); margin-bottom: var(--space-xl);">
        <h4 style="margin-bottom: var(--space-lg);">🔄 Execution Workflow Summary</h4>
        <div class="workflow-steps">
          ${renderWorkflowSteps(brandName)}
        </div>
      </div>

      <!-- Actions -->
      <div style="display: flex; justify-content: center; gap: var(--space-md); margin-top: var(--space-xl);">
        <button class="btn btn-secondary btn-lg" id="restart-btn">
          <span>🔄</span> New Brand Analysis
        </button>
        <button class="btn btn-primary btn-lg" id="export-btn">
          <span>📄</span> Export Brief
        </button>
      </div>
    </div>
  `;

    // Typewriter
    const textEl = container.querySelector('#delivery-text');
    typewriterMarkdown(textEl, AGENT_MESSAGES.deliveryReady(brandName), 12);

    // Stagger reveal deliverables
    setTimeout(() => {
        staggerReveal(container.querySelector('#deliverables-grid'), '.delivery-card', 200);
    }, 400);

    // Restart button
    container.querySelector('#restart-btn').addEventListener('click', () => {
        // Reset state and go back to step 1
        state.currentStep = 0;
        state.brandHandle = '';
        state.brandProfile = null;
        state.concepts = [];
        state.selectedConcepts = new Set();
        state.uploadedRefs = {};
        state.prompts = [];
        window.dispatchEvent(new CustomEvent('app:restart'));
    });

    // Export button
    container.querySelector('#export-btn').addEventListener('click', () => {
        exportBrief(state, selectedConcepts);
    });
}

function renderDeliveryCard(concept, index, state) {
    const prompt = state.prompts[index];
    const gradient = `linear-gradient(135deg, ${concept.gradientColors[0]}80, ${concept.gradientColors[1]}80)`;

    return `
    <div class="delivery-card" style="margin-bottom: var(--space-xl); opacity: 0;">
      <div style="display: flex;">
        <div class="delivery-card-image" style="background: ${gradient}; width: 280px; min-height: 350px; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">
          <div style="text-align: center; z-index: 2; position: relative;">
            <div style="font-size: 3rem; margin-bottom: var(--space-md);">${concept.icon}</div>
            <div style="font-size: 0.85rem; font-weight: 700; padding: var(--space-sm) var(--space-lg); background: rgba(0,0,0,0.4); backdrop-filter: blur(10px); border-radius: var(--radius-full);">
              Concept ${index + 1}
            </div>
          </div>
        </div>
        <div class="delivery-card-body" style="flex: 1; padding: var(--space-xl);">
          <span class="badge badge-accent" style="margin-bottom: var(--space-md);">${concept.styleDirection.split(',')[0]}</span>
          <h3 style="margin-bottom: var(--space-sm);">${concept.title}</h3>
          <p style="margin-bottom: var(--space-lg);">${concept.adaptedMood || concept.mood}</p>

          <div class="grid-2" style="margin-bottom: var(--space-lg);">
            <div>
              <span class="info-label" style="display: block; font-size: 0.7rem; margin-bottom: 4px;">Camera Style</span>
              <span style="font-size: 0.85rem;">${concept.cameraStyle}</span>
            </div>
            <div>
              <span class="info-label" style="display: block; font-size: 0.7rem; margin-bottom: 4px;">Brand Colors</span>
              <div class="color-palette">
                ${(concept.brandColors || state.brandProfile.colors).slice(0, 4).map(c => `<div class="color-swatch" style="background: ${c}; width: 22px; height: 22px;"></div>`).join('')}
              </div>
            </div>
          </div>

          <div class="delivery-instructions">
            <h5>Post-Generation Edits</h5>
            <ul>
              ${(prompt?.prompt?.editInstructions || [
            `Swap clothing to ${state.brandProfile.name} pieces`,
            'Match brand aesthetic and color grading',
            'Maintain iPhone realism throughout',
        ]).map(inst => `<li>${inst}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderWorkflowSteps(brandName) {
    const steps = [
        { icon: '🔍', title: 'Search Pinterest', desc: 'Use the curated keywords to find 1-2 matching reference images per concept' },
        { icon: '📎', title: 'Pair References', desc: 'Upload references alongside the AI prompt in NanoAbanan 2' },
        { icon: '🤖', title: 'Generate Images', desc: 'Run the prompt with references for hyper-realistic iPhone-style output' },
        { icon: '👗', title: 'Swap Clothing', desc: `Replace generic clothing with actual ${brandName} pieces from the collection` },
        { icon: '🎨', title: 'Color Grade', desc: `Adjust color grading to match ${brandName}'s Instagram visual identity` },
        { icon: '✅', title: 'Final Review', desc: 'Ensure consistency across all 3 concepts before client presentation' },
    ];

    return `
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg);">
      ${steps.map((step, i) => `
        <div style="display: flex; gap: var(--space-md); align-items: flex-start;">
          <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--accent-glow); border: 1px solid var(--border-active); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1rem;">
            ${step.icon}
          </div>
          <div>
            <h5 style="font-size: 0.82rem; font-weight: 600; margin-bottom: 2px;">${step.title}</h5>
            <p style="font-size: 0.78rem; margin-bottom: 0; color: var(--text-tertiary);">${step.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function exportBrief(state, selectedConcepts) {
    const brandName = state.brandProfile.name;

    let text = `═══════════════════════════════════════\n`;
    text += `  ${brandName} — Visual Concept Brief\n`;
    text += `  Creative Direction by VisioDirector AI\n`;
    text += `═══════════════════════════════════════\n\n`;

    text += `BRAND ANALYSIS\n`;
    text += `─────────────\n`;
    text += `Handle: ${state.brandProfile.handle}\n`;
    text += `Aesthetic: ${state.brandProfile.aesthetic}\n`;
    text += `Tone: ${state.brandProfile.tone}\n`;
    text += `Visual Style: ${state.brandProfile.visualStyle}\n\n`;

    selectedConcepts.forEach((concept, i) => {
        const prompt = state.prompts[i];
        text += `\nCONCEPT ${i + 1}: ${concept.title.toUpperCase()}\n`;
        text += `─────────────\n`;
        text += `Mood: ${concept.mood}\n`;
        text += `Style: ${concept.styleDirection}\n`;
        text += `Camera: ${concept.cameraStyle}\n\n`;
        text += `AI PROMPT:\n${prompt.prompt.mainPrompt}\n\n`;
        text += `NEGATIVE PROMPT:\n${prompt.prompt.negativePrompt}\n\n`;
        text += `EDIT STEPS:\n`;
        prompt.prompt.editInstructions.forEach(inst => {
            text += `  → ${inst}\n`;
        });
        text += `\n`;
    });

    // Download as text file
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${brandName.toLowerCase()}_concept_brief.txt`;
    a.click();
    URL.revokeObjectURL(url);
}
