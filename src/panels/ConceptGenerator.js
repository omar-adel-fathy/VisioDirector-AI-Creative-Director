// ═══════════════════════════════════════════════════════════
// Panel 2: Concept Generator
// ═══════════════════════════════════════════════════════════

import { generateConcepts, AGENT_MESSAGES } from '../utils/mockData.js';
import { typewriterMarkdown, staggerReveal, slideUp, delay } from '../utils/animations.js';

export function renderConceptGenerator(container, state, onComplete) {
    // Generate concepts if not already done
    if (!state.concepts || state.concepts.length === 0) {
        state.concepts = generateConcepts(state.brandProfile);
    }
    if (!state.selectedConcepts) {
        state.selectedConcepts = new Set();
    }

    container.innerHTML = `
    <div class="panel fade-in">
      <div class="panel-header">
        <span class="panel-step-badge">✦ Step 2</span>
        <h1 class="panel-title">Visual Concepts</h1>
        <p class="panel-description">3 unique creative directions tailored to ${state.brandProfile.name}'s visual identity. Select the ones to develop.</p>
      </div>

      <!-- Agent Message -->
      <div class="agent-message slide-up">
        <div class="agent-avatar">💡</div>
        <div class="agent-content">
          <div class="agent-name">VisioDirector AI</div>
          <div class="agent-text" id="concepts-text"></div>
        </div>
      </div>

      <!-- Concepts Grid -->
      <div class="grid-3" id="concepts-grid" style="margin-bottom: var(--space-xl);">
        ${state.concepts.map((concept, i) => renderConceptCard(concept, i, state.selectedConcepts.has(i))).join('')}
      </div>

      <!-- Selection Info -->
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div>
          <span id="selection-count" style="font-size: 0.85rem; color: var(--text-tertiary);">
            ${state.selectedConcepts.size > 0 ? `${state.selectedConcepts.size} concept${state.selectedConcepts.size > 1 ? 's' : ''} selected` : 'Click cards to select concepts'}
          </span>
        </div>
        <div style="display: flex; gap: var(--space-md);">
          <button class="btn btn-secondary" id="shuffle-btn">
            <span>🔄</span> New Concepts
          </button>
          <button class="btn btn-primary btn-lg" id="continue-concepts-btn" ${state.selectedConcepts.size === 0 ? 'disabled' : ''}>
            <span>→</span> Find References
          </button>
        </div>
      </div>
    </div>
  `;

    // Typewriter
    const textEl = container.querySelector('#concepts-text');
    typewriterMarkdown(textEl, AGENT_MESSAGES.conceptsReady, 12);

    // Stagger reveal cards
    setTimeout(() => {
        staggerReveal(container.querySelector('#concepts-grid'), '.concept-card', 120);
    }, 200);

    // Card selection
    const cards = container.querySelectorAll('.concept-card');
    const countEl = container.querySelector('#selection-count');
    const continueBtn = container.querySelector('#continue-concepts-btn');

    cards.forEach((card, i) => {
        card.addEventListener('click', () => {
            if (state.selectedConcepts.has(i)) {
                state.selectedConcepts.delete(i);
                card.classList.remove('selected');
            } else {
                state.selectedConcepts.add(i);
                card.classList.add('selected');
            }
            const count = state.selectedConcepts.size;
            countEl.textContent = count > 0 ? `${count} concept${count > 1 ? 's' : ''} selected` : 'Click cards to select concepts';
            continueBtn.disabled = count === 0;
        });
    });

    // Shuffle button
    container.querySelector('#shuffle-btn').addEventListener('click', () => {
        state.concepts = generateConcepts(state.brandProfile);
        state.selectedConcepts = new Set();
        renderConceptGenerator(container, state, onComplete);
    });

    // Continue button
    continueBtn.addEventListener('click', () => onComplete());
}

function renderConceptCard(concept, index, isSelected) {
    const gradient = `linear-gradient(135deg, ${concept.gradientColors[0]}, ${concept.gradientColors[1]})`;

    return `
    <div class="card concept-card ${isSelected ? 'selected' : ''}" data-index="${index}" style="opacity: 0;">
      <div class="concept-card-image" style="background: ${gradient};">
        <div class="concept-number">${concept.number}</div>
        <div style="position: absolute; bottom: var(--space-lg); left: var(--space-lg); z-index: 2;">
          <span style="font-size: 2rem;">${concept.icon}</span>
        </div>
      </div>
      <div class="concept-card-body">
        <h4>${concept.title}</h4>
        <p>${concept.mood}</p>
        <div style="margin-bottom: var(--space-md);">
          <span class="badge badge-accent">${concept.styleDirection.split(',')[0]}</span>
        </div>
        <div style="margin-bottom: var(--space-sm);">
          <span class="info-label" style="font-size: 0.72rem;">Camera</span>
        </div>
        <p style="font-size: 0.78rem; color: var(--text-tertiary); margin-bottom: 0;">${concept.cameraStyle}</p>
      </div>
    </div>
  `;
}
