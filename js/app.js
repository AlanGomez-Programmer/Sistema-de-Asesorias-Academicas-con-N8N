document.addEventListener('DOMContentLoaded', () => {
    const scrollLinks = document.querySelectorAll('[data-scroll-target]');

    scrollLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.dataset.scrollTarget;
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    const telegramButtons = document.querySelectorAll('[data-telegram]');

    telegramButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const telegramUrl = button.dataset.telegram;
            window.open(telegramUrl, '_blank');
        });
    });
});
