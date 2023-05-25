import { LoadingService } from ".";

export const TemplatesService = {
    insertApiDiv: (apiPlaceholderId: string) => {
        const apiId = 'api';
        const api = document.querySelector('#' + apiId)!;
        const apiPlaceholder = document.querySelector('#' + apiPlaceholderId)!;
        apiPlaceholder.insertAdjacentElement('afterend', api);
        apiPlaceholder.remove();
    },
    removeCommon: () => {
        const elements = [
            document.querySelector('.divider'),
            document.querySelector('.create'),
            document.querySelector('.intro'),
        ];

        elements.forEach(x => { if (x) x.remove() });
        
        Array.from(document.querySelectorAll('a'))
            .filter(x => x.innerText === 'What is this?')
            .forEach(x => { if (x) x.remove(); });

        const buttons = document.querySelectorAll('.buttons');
        if (buttons.length > 1) buttons[0].classList.add('d-none');
    },
    addClassToLabels: () => {
        const labels = document.querySelectorAll('label');
        Array.from(labels)
            .forEach(x => {
                if (x) {
                    x.classList.add('form-label');
                    x.classList.add('mt-3');
                }
            });
        return labels;
    },
    hideElement: (selector: string) => {
        const element = document.querySelector(selector)!;
        if (element) element.classList.add('d-none');
    },
    showElement: (selector: string) => {
        const element = document.querySelector(selector)!;
        if (element) {
            element.classList.remove('d-none');
            element.classList.remove('d-inline-block');
        }
    },
    setTextToElement: (selector: string, text: string) => {
        const element = document.querySelector(selector)!;
        if (element) element.textContent = text;
    },
    addToClick: (selector: string, handler: (ev: any) => any) => {
        const element = document.querySelector(selector)!;
        if (element) element.addEventListener('click', handler);
    },
    
    initialLoad: (handler: () => any) => {
        LoadingService.start();
        const interval = setInterval(() => {
            // Waits for the form to be loaded
            const form = document.querySelector('form');
            if (!form) return;
            
            handler();

            clearInterval(interval);
        }, 50);
    },
}