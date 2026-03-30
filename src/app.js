// ═══════════════════════════════════════════════════════════
// App Controller — Manages workflow state and panel routing
// ═══════════════════════════════════════════════════════════

import { renderBrandAnalysis } from './panels/BrandAnalysis.js';
import { renderConceptGenerator } from './panels/ConceptGenerator.js';
import { renderReferenceBoard } from './panels/ReferenceBoard.js';
import { renderPromptBuilder } from './panels/PromptBuilder.js';
import { renderFinalDelivery } from './panels/FinalDelivery.js';

const STEPS = [
    { id: 'analyze', title: 'Analyze Brand', subtitle: 'Instagram study', icon: '🔍' },
    { id: 'concepts', title: 'Visual Concepts', subtitle: '3 creative directions', icon: '💡' },
    { id: 'references', title: 'Find References', subtitle: 'Pinterest keywords', icon: '📌' },
    { id: 'prompts', title: 'Build Prompts', subtitle: 'AI generation', icon: '⚡' },
    { id: 'deliver', title: 'Final Delivery', subtitle: 'Client presentation', icon: '🎯' },
];

export class App {
    constructor(rootEl) {
        this.root = rootEl;
        this.state = {
            currentStep: 0,
            brandHandle: '',
            brandProfile: null,
            concepts: [],
            selectedConcepts: new Set(),
            uploadedRefs: {},
            prompts: [],
        };

        // Listen for restart events
        window.addEventListener('app:restart', () => {
            this.state = {
                currentStep: 0,
                brandHandle: '',
                brandProfile: null,
                concepts: [],
                selectedConcepts: new Set(),
                uploadedRefs: {},
                prompts: [],
            };
            this.render();
        });
    }

    render() {
        this.root.innerHTML = `
      ${this.renderHeader()}
      <div class="app-body">
        ${this.renderSidebar()}
        <main class="main-content" id="main-content"></main>
      </div>
    `;

        this.renderCurrentPanel();
        this.bindSidebarEvents();
    }

    renderHeader() {
        return `
      <header class="app-header">
        <div class="app-logo">
          <div class="app-logo-icon">✦</div>
          <span class="app-logo-text">VisioDirector</span>
          <span class="app-logo-badge">AI Creative Director</span>
        </div>
        <div class="app-header-right">
          ${this.state.brandProfile ? `
            <div class="sidebar-brand-preview" style="padding: 6px 12px;">
              <div class="brand-avatar" style="width: 28px; height: 28px; font-size: 0.8rem;">${this.state.brandProfile.avatar}</div>
              <div class="brand-preview-info">
                <div class="brand-preview-name" style="font-size: 0.78rem;">${this.state.brandProfile.name}</div>
              </div>
            </div>
          ` : ''}
          <div class="progress-bar" style="width: 120px;">
            <div class="progress-fill" style="width: ${((this.state.currentStep + 1) / STEPS.length) * 100}%;"></div>
          </div>
        </div>
      </header>
    `;
    }

    renderSidebar() {
        return `
      <aside class="sidebar">
        <div class="sidebar-section-title">Workflow Steps</div>
        <ul class="sidebar-steps">
          ${STEPS.map((step, i) => `
            <li class="sidebar-step ${i === this.state.currentStep ? 'active' : ''} ${i < this.state.currentStep ? 'completed' : ''}"
                data-step="${i}"
                ${i > this.state.currentStep ? 'style="opacity: 0.4; pointer-events: none;"' : ''}>
              <div class="step-indicator">
                ${i < this.state.currentStep ? '✓' : i + 1}
              </div>
              <div class="step-info">
                <span class="step-title">${step.title}</span>
                <span class="step-subtitle">${step.subtitle}</span>
              </div>
            </li>
          `).join('')}
        </ul>

        ${this.state.brandProfile ? `
          <div class="sidebar-footer">
            <div class="sidebar-brand-preview">
              <div class="brand-avatar">${this.state.brandProfile.avatar}</div>
              <div class="brand-preview-info">
                <div class="brand-preview-name">${this.state.brandProfile.name}</div>
                <div class="brand-preview-handle">${this.state.brandProfile.handle}</div>
              </div>
            </div>
          </div>
        ` : `
          <div class="sidebar-footer">
            <div style="text-align: center; padding: var(--space-md); color: var(--text-tertiary); font-size: 0.78rem;">
              No brand selected yet
            </div>
          </div>
        `}
      </aside>
    `;
    }

    renderCurrentPanel() {
        const mainContent = this.root.querySelector('#main-content');
        if (!mainContent) return;

        const panels = [
            () => renderBrandAnalysis(mainContent, this.state, () => this.goToStep(1)),
            () => renderConceptGenerator(mainContent, this.state, () => this.goToStep(2)),
            () => renderReferenceBoard(mainContent, this.state, () => this.goToStep(3)),
            () => renderPromptBuilder(mainContent, this.state, () => this.goToStep(4)),
            () => renderFinalDelivery(mainContent, this.state),
        ];

        panels[this.state.currentStep]();
    }

    goToStep(stepIndex) {
        this.state.currentStep = stepIndex;
        this.render();
        // Scroll to top
        const mainContent = this.root.querySelector('#main-content');
        if (mainContent) mainContent.scrollTop = 0;
    }

    bindSidebarEvents() {
        const steps = this.root.querySelectorAll('.sidebar-step');
        steps.forEach(step => {
            step.addEventListener('click', () => {
                const index = parseInt(step.dataset.step);
                if (index <= this.state.currentStep) {
                    this.goToStep(index);
                }
            });
        });
    }
}
