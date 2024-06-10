class FooterApp extends HTMLElement {
    constructor() {
        super();

        // Buat shadow DOM untuk isolasi tampilan dan gaya, serta tambahkan elemen-elemen yang diperlukan
        const shadow = this.attachShadow({ mode: 'open' });

        // Konten elemen footer-app
        const footerContent = document.createElement('p');
        footerContent.textContent = 'Yogi Aprio © Front-End Web Developer Expert';

        // Styling elemen footer-app menggunakan CSS di dalam shadow DOM
        const style = document.createElement('style');
        style.textContent = `
        p {
            background-color: #C6EBC5;
            color: black;
            font-weight: bold;
            font-family: 'Figtree', sans-serif;
            font-size: 18px;
            padding: 20px;
            margin: 0;
            text-align: center;
        }
      `;

        // Masukkan elemen-elemen ke dalam shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(footerContent);
    }
}

// Registrasikan elemen baru sebagai custom element
customElements.define('footer-app', FooterApp);
