class HeroApp extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <div class="hero">
      <picture>
      <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.webp">
      <img src="./images/hero-image_2-large.webp" alt="Restaurant Image" loading="lazy" >
      </picture>
      <h1 class="hero-title">Restaurant Apps</h1>
      <p class="hero-description">
        "Kunjungi website kami, penyedia restaurant terbaik, untuk menemukan pengalaman kuliner tak terlupakan dari berbagai macam restoran pilihan!"
      </p>
    </div>
  `;
    }
}

customElements.define('hero-app', HeroApp);
