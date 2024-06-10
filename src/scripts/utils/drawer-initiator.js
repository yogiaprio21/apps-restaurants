const DrawerInitiator = {
    init({ button, drawer, content }) {
        if (!button || !drawer || !content) {
            console.error('Button, drawer, or content element not found in the DOM.');
            return;
        }

        button.addEventListener('click', (event) => {
            this._toggleDrawer(event, drawer);
        });

        content.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });

        // Menutup drawer saat klik di luar drawer
        document.addEventListener('click', (event) => {
            const isClickInsideDrawer = drawer.contains(event.target);
            const isClickInsideButton = button.contains(event.target);
            if (!isClickInsideDrawer && !isClickInsideButton) {
                this._closeDrawer(event, drawer);
            }
        });
    },

    _toggleDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle('open');
    },

    _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('open');
    },
};

export default DrawerInitiator;
