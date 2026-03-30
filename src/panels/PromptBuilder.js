// ═══════════════════════════════════════════════════════════
// Panel 4: Prompt Builder
// ═══════════════════════════════════════════════════════════

import { buildPrompt, AGENT_MESSAGES } from '../utils/mockData.js';
import { typewriterMarkdown, staggerReveal } from '../utils/animations.js';

export function renderPromptBuilder(container, state, onComplete) {
    const selectedConceptIndices = Array.from(state.selectedConcepts || []);
    const selectedConcepts = selectedConceptIndices.map(i => state.concepts[i]);

    // Build prompts for each concept
    state.prompts = selectedConcepts.map(concept => ({
        concept,
        prompt: buildPrompt(concept, state.brandProfile),
    }));

    container.innerHTML = `
    <div class="panel fade-in">
      <div class="panel-header">
        <span class="panel-step-badge">✦ Step 4</span>
        <h1 class="panel-title">AI Prompt Builder</h1>
        <p class="panel-description">Optimized prompts for hyper-realistic iPhone-style brand photography. Use with NanoAbanan 2 + your Pinterest references.</p>
      </div>

      <!-- Agent Message -->
      <div class="agent-message slide-up">
        <div class="agent-avatar">⚡</div>
        <div class="agent-content">
          <div class="agent-name">VisioDirector AI</div>
          <div class="agent-text" id="prompt-text"></div>
        </div>
      </div>

      <!-- Prompt Blocks -->
      <div id="prompt-blocks">
        ${state.prompts.map((p, i) => renderPromptBlock(p, i)).join('')}
      </div>

      <!-- Usage Instructions -->
      <div class="card-glass" style="margin-top: var(--space-xl); margin-bottom: var(--space-xl);">
        <h4 style="margin-bottom: var(--space-md);">📋 How to Use These Prompts</h4>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg);">
          <div>
            <div style="font-size: 1.5rem; margin-bottom: var(--space-sm);">1️⃣</div>
            <h5 style="font-size: 0.85rem; margin-bottom: var(--space-xs);">Grab References</h5>
            <p style="font-size: 0.82rem;">Use the Pinterest keywords from Step 3 to find 1-2 matching reference images.</p>
          </div>
          <div>
            <div style="font-size: 1.5rem; margin-bottom: var(--space-sm);">2️⃣</div>
            <h5 style="font-size: 0.85rem; margin-bottom: var(--space-xs);">Generate in NanoAbanan 2</h5>
            <p style="font-size: 0.82rem;">Upload references + paste the prompt. Use the reference images as style guide for realistic output.</p>
          </div>
          <div>
            <div style="font-size: 1.5rem; margin-bottom: var(--space-sm);">3️⃣</div>
            <h5 style="font-size: 0.85rem; margin-bottom: var(--space-xs);">Swap & Edit</h5>
            <p style="font-size: 0.82rem;">Replace generic clothing with actual ${state.brandProfile.name} pieces. Match the brand's collection.</p>
          </div>
        </div>
      </div>

      <!-- Continue -->
      <div style="display: flex; justify-content: flex-end;">
        <button class="btn btn-primary btn-lg" id="continue-prompt-btn">
          <span>→</span> View Final Delivery
        </button>
      </div>
    </div>
  `;

    // Typewriter
    const textEl = container.querySelector('#prompt-text');
    typewriterMarkdown(textEl, AGENT_MESSAGES.promptsReady, 12);

    // Stagger reveal
    setTimeout(() => {
        staggerReveal(container.querySelector('#prompt-blocks'), '.prompt-block', 200);
    }, 300);

    // Copy button handlers
    container.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const promptBlock = btn.closest('.prompt-block');
            const promptText = promptBlock.querySelector('.prompt-text').textContent;
            navigator.clipboard.writeText(promptText).then(() => {
                btn.classList.add('copied');
                btn.innerHTML = '✓ Copied!';
                setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.innerHTML = '📋 Copy Prompt';
                }, 2000);
            });
        });
    });

    // Continue
    container.querySelector('#continue-prompt-btn').addEventListener('click', () => onComplete());
}

function renderPromptBlock(promptData, index) {
    const { concept, prompt } = promptData;

    // Format the prompt text with some highlights
    const formattedMain = prompt.mainPrompt
        .replace(/(iPhone 15 Pro)/g, '<span class="highlight">$1</span>')
        .replace(/(NanoAbanan 2)/g, '<span class="highlight">$1</span>')
        .replace(/(hyper-realistic)/gi, '<span class="param">$1</span>')
        .replace(/(natural skin texture|real fabric draping)/g, '<span class="param">$1</span>');

    return `
    <div class="prompt-block" style="opacity: 0;">
      <div class="prompt-block-header">
        <div class="prompt-block-title">
          <span>${concept.icon}</span>
          Concept ${index + 1}: ${concept.title}
        </div>
        <button class="copy-btn">📋 Copy Prompt</button>
      </div>
      <div class="prompt-block-body">
        <div style="margin-bottom: var(--space-md);">
          <span class="badge badge-accent" style="margin-bottom: var(--space-sm);">Main Prompt</span>
        </div>
        <div class="prompt-text">${formattedMain}</div>

        <div class="divider"></div>

        <div style="margin-bottom: var(--space-md);">
          <span class="badge" style="background: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.3); color: #f87171;">Negative Prompt</span>
        </div>
        <div class="prompt-text" style="color: var(--text-tertiary); font-size: 0.78rem;">${prompt.negativePrompt}</div>

        <div class="divider"></div>

        <div style="display: flex; align-items: flex-start; gap: var(--space-md); padding: var(--space-md); background: var(--accent-glow); border-radius: var(--radius-md); border: 1px solid var(--border-active);">
          <span style="font-size: 1.2rem;">💡</span>
          <div>
            <h5 style="font-size: 0.82rem; font-weight: 600; margin-bottom: 4px; color: var(--accent-tertiary);">Reference Note</h5>
            <p style="font-size: 0.82rem; margin-bottom: 0; color: var(--text-secondary);">${prompt.referenceNote}</p>
          </div>
        </div>

        <div class="divider"></div>

        <div>
          <h5 style="font-size: 0.82rem; font-weight: 600; margin-bottom: var(--space-sm); color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em;">Post-Generation Edit Steps</h5>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: var(--space-sm);">
            ${prompt.editInstructions.map(inst => `
              <li style="font-size: 0.82rem; color: var(--text-secondary); padding-left: var(--space-lg); position: relative;">
                <span style="position: absolute; left: 0; color: var(--accent-tertiary);">→</span>
                ${inst}
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}
