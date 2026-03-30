// ═══════════════════════════════════════════════════════════
// Animation Utilities
// ═══════════════════════════════════════════════════════════

/**
 * Typewriter effect — reveals text character by character
 */
export function typewriter(element, text, speed = 20) {
    return new Promise((resolve) => {
        let i = 0;
        element.textContent = '';
        element.style.opacity = '1';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        type();
    });
}

/**
 * Markdown-aware typewriter — handles **bold** markers
 */
export function typewriterMarkdown(element, text, speed = 18) {
    return new Promise((resolve) => {
        // Parse markdown to HTML first
        const html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        element.innerHTML = '';
        element.style.opacity = '1';

        // Create a temporary element to parse HTML
        const temp = document.createElement('div');
        temp.innerHTML = html;

        // Get all text nodes and their wrappers
        const fragments = [];
        function walk(node) {
            if (node.nodeType === 3) { // text node
                for (const char of node.textContent) {
                    fragments.push({ char, wrapper: null });
                }
            } else if (node.nodeType === 1) { // element node
                const tag = node.tagName.toLowerCase();
                for (const char of node.textContent) {
                    fragments.push({ char, wrapper: tag });
                }
            }
        }
        temp.childNodes.forEach(walk);

        let i = 0;
        let currentWrapper = null;
        let currentEl = null;

        function type() {
            if (i < fragments.length) {
                const { char, wrapper } = fragments[i];

                if (wrapper !== currentWrapper) {
                    if (wrapper) {
                        currentEl = document.createElement(wrapper);
                        element.appendChild(currentEl);
                    } else {
                        currentEl = null;
                    }
                    currentWrapper = wrapper;
                }

                if (currentEl) {
                    currentEl.textContent += char;
                } else {
                    element.appendChild(document.createTextNode(char));
                }

                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        type();
    });
}

/**
 * Staggered reveal — shows child elements one after another
 */
export function staggerReveal(container, selector, delayMs = 80) {
    const items = container.querySelectorAll(selector);
    items.forEach((item, i) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(16px)';
        item.style.transition = `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * delayMs}ms`;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            });
        });
    });
}

/**
 * Fade in element
 */
export function fadeIn(element, duration = 300) {
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`;
    requestAnimationFrame(() => {
        element.style.opacity = '1';
    });
}

/**
 * Slide up + fade in element
 */
export function slideUp(element, duration = 400, delay = 0) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(24px)';
    element.style.transition = `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    });
}

/**
 * Scale in element
 */
export function scaleIn(element, duration = 300, delay = 0) {
    element.style.opacity = '0';
    element.style.transform = 'scale(0.92)';
    element.style.transition = `all ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`;
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        });
    });
}

/**
 * Delay helper
 */
export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Animate progress bar
 */
export function animateProgress(element, targetPercent, duration = 1000) {
    element.style.width = '0%';
    element.style.transition = `width ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`;
    requestAnimationFrame(() => {
        element.style.width = `${targetPercent}%`;
    });
}
