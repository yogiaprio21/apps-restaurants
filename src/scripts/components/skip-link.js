document.addEventListener('DOMContentLoaded', () => {
    const skipLink = document.querySelector('.skip-link');

    skipLink.addEventListener('click', (event) => {
        event.preventDefault();

        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.scrollIntoView({ behavior: 'smooth' });
            mainContent.focus();
        }
    });
});
