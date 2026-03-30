// ═══════════════════════════════════════════════════════════
// Panel 1: Brand Analysis
// ═══════════════════════════════════════════════════════════

import { getBrandProfile, AGENT_MESSAGES } from '../utils/mockData.js';
import { typewriterMarkdown, staggerReveal, slideUp, delay, animateProgress } from '../utils/animations.js';

export function renderBrandAnalysis(container, state, onComplete) {
    container.innerHTML = `
    <div class="panel fade-in">
      <div class="panel-header">
        <span class="panel-step-badge">✦ Step 1</span>
        <h1 class="panel-title">Brand Analysis</h1>
        <p class="panel-description">Enter an Instagram handle to analyze the brand's visual identity, aesthetic, and content strategy.</p>
      </div>

      <!-- Agent Welcome Message -->
      <div class="agent-message slide-up">
        <div class="agent-avatar">🎨</div>
        <div class="agent-content">
          <div class="agent-name">VisioDirector AI</div>
          <div class="agent-text" id="welcome-text"></div>
        </div>
      </div>

      <!-- Input -->
      <div class="card-glass slide-up stagger-2" style="margin-bottom: var(--space-xl);">
        <div class="input-row">
          <div class="input-group">
            <label class="input-label">Instagram Handle</label>
            <input type="text" class="input-field" id="ig-handle-input" 
                   placeholder="@brandname (try @nike, @zara, or @gucci)"
                   value="${state.brandHandle || ''}" />
          </div>
          <button class="btn btn-primary btn-lg" id="analyze-btn">
            <span>⚡</span> Analyze Brand
          </button>
        </div>
      </div>

      <!-- Analysis Results (hidden initially) -->
      <div id="analysis-results" style="display: none;"></div>
    </div>
  `;

    // Typewriter welcome message
    const welcomeEl = container.querySelector('#welcome-text');
    typewriterMarkdown(welcomeEl, AGENT_MESSAGES.welcome, 12);

    // Analyze button handler
    const analyzeBtn = container.querySelector('#analyze-btn');
    const handleInput = container.querySelector('#ig-handle-input');

    handleInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') analyzeBtn.click();
    });

    analyzeBtn.addEventListener('click', async () => {
        const handle = handleInput.value.trim();
        if (!handle) {
            handleInput.style.borderColor = '#ef4444';
            setTimeout(() => handleInput.style.borderColor = '', 1000);
            return;
        }

        // Update state
        state.brandHandle = handle;
        state.brandProfile = getBrandProfile(handle);

        // Show loading state
        analyzeBtn.disabled = true;
        analyzeBtn.innerHTML = '<span class="typing-indicator"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></span> Analyzing...';

        // Show analysis agent message  
        const resultsDiv = container.querySelector('#analysis-results');
        resultsDiv.style.display = 'block';
        resultsDiv.innerHTML = `
      <div class="agent-message" id="analysis-msg">
        <div class="agent-avatar">🔍</div>
        <div class="agent-content">
          <div class="agent-name">VisioDirector AI</div>
          <div class="agent-text" id="analysis-text"></div>
        </div>
      </div>
      <div id="profile-card-area"></div>
    `;

        slideUp(resultsDiv.querySelector('#analysis-msg'));

        // Typewriter analysis message
        const analysisTextEl = resultsDiv.querySelector('#analysis-text');
        await delay(500);
        await typewriterMarkdown(analysisTextEl, AGENT_MESSAGES.analyzing, 15);
        await delay(1200);

        // Replace with complete analysis
        analysisTextEl.innerHTML = '';
        await typewriterMarkdown(analysisTextEl, AGENT_MESSAGES.analysisComplete(state.brandProfile.name), 12);

        await delay(400);

        // Render profile card
        const profileArea = resultsDiv.querySelector('#profile-card-area');
        renderProfileCard(profileArea, state.brandProfile);
        staggerReveal(profileArea, '.reveal-item', 100);

        // Re-enable button as "Continue"
        analyzeBtn.disabled = false;
        analyzeBtn.innerHTML = '<span>→</span> Generate Concepts';
        analyzeBtn.onclick = () => onComplete();
    });

    // If returning to this step with existing data
    if (state.brandProfile) {
        const resultsDiv = container.querySelector('#analysis-results');
        resultsDiv.style.display = 'block';
        renderProfileCard(resultsDiv, state.brandProfile);
        analyzeBtn.innerHTML = '<span>→</span> Generate Concepts';
        analyzeBtn.onclick = () => onComplete();
    }
}

function renderProfileCard(container, profile) {
    container.innerHTML = `
    <div class="card-gradient reveal-item" style="margin-bottom: var(--space-lg);">
      <div style="display: flex; align-items: center; gap: var(--space-lg); margin-bottom: var(--space-xl);">
        <div class="brand-avatar" style="width: 56px; height: 56px; font-size: 1.4rem;">${profile.avatar}</div>
        <div>
          <h3 style="margin-bottom: 2px;">${profile.name}</h3>
          <span style="color: var(--text-tertiary); font-size: 0.85rem;">${profile.handle}</span>
        </div>
        <div style="margin-left: auto; display: flex; gap: var(--space-xl);">
          <div class="stat-card" style="padding: var(--space-sm);">
            <div class="stat-value" style="font-size: 1.2rem;">${profile.followers}</div>
            <div class="stat-label">Followers</div>
          </div>
          <div class="stat-card" style="padding: var(--space-sm);">
            <div class="stat-value" style="font-size: 1.2rem;">${profile.posts}</div>
            <div class="stat-label">Posts</div>
          </div>
          <div class="stat-card" style="padding: var(--space-sm);">
            <div class="stat-value" style="font-size: 1.2rem;">${profile.engagement}</div>
            <div class="stat-label">Engagement</div>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="grid-2 reveal-item" style="gap: var(--space-xl);">
        <div>
          <div class="info-row">
            <span class="info-label">Aesthetic</span>
            <span class="info-value">${profile.aesthetic}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Tone</span>
            <span class="info-value">${profile.tone}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Content Mix</span>
            <span class="info-value">📸 ${profile.contentMix.photos}% · 🎬 ${profile.contentMix.videos}% · 🎥 ${profile.contentMix.reels}%</span>
          </div>
        </div>
        <div>
          <div style="margin-bottom: var(--space-md);">
            <span class="info-label" style="display: block; margin-bottom: var(--space-sm);">Color Palette</span>
            <div class="color-palette">
              ${profile.colors.map(c => `<div class="color-swatch" style="background: ${c};" title="${c}"></div>`).join('')}
            </div>
          </div>
          <div>
            <span class="info-label" style="display: block; margin-bottom: var(--space-sm);">Themes</span>
            <div class="tag-list">
              ${profile.themes.map(t => `<span class="badge">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-glass reveal-item">
      <h4 style="margin-bottom: var(--space-sm);">📝 Visual Style Summary</h4>
      <p style="font-size: 0.9rem; line-height: 1.7;">${profile.visualStyle}</p>
      <div class="divider"></div>
      <h4 style="margin-bottom: var(--space-sm);">🎯 Brand Personality</h4>
      <p style="font-size: 0.9rem; line-height: 1.7;">${profile.brandPersonality}</p>
    </div>
  `;
}
