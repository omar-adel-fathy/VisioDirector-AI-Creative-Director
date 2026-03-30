// ═══════════════════════════════════════════════════════════
// VisioDirector — Entry Point
// ═══════════════════════════════════════════════════════════

import { App } from './app.js';

// Initialize the app
const rootEl = document.getElementById('app');
const app = new App(rootEl);
app.render();
