import SplitType from 'split-type';

export function initSplitLetters() {
    const elements = document.querySelectorAll('[data-split="letters"]');

    Array.from(elements).forEach((el) => {
        // Prevent duplicate splitting
        if (!el.hasAttribute("split-ran")) {
            const splitInstance = new SplitType(el, {
                types: "words, chars",
                charClass: "single-letter",
            });

            // Add delay if attribute is set
            if (el.hasAttribute("data-letters-delay")) {
                splitInstance.chars.forEach((char, index) => {
                    const delay = `${index / 150}s`;
                    char.style.setProperty("transition-delay", delay);
                });
            }

            el.setAttribute("split-ran", "true");
        }
    });
}

export function initSplitLines() {
    const elements = document.querySelectorAll('[data-split="lines"]');

    Array.from(elements).forEach((el) => {
        // Prevent duplicate splitting
        if (!el.hasAttribute("split-ran")) {
            const splitInstance = new SplitType(el, {
                types: "lines",
                lineClass: "single-line",
            });

            // // Add delay if attribute is set
            // if (el.hasAttribute("data-letters-delay")) {
            //     splitInstance.chars.forEach((char, index) => {
            //         const delay = `${index / 150}s`;
            //         char.style.setProperty("transition-delay", delay);
            //     });
            // }

            el.setAttribute("split-ran", "true");
        }
    });
}