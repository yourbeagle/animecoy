class JumbotronBanner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron jumbotron-fluid container-fluid text-white text-center">
    <div class="container">
      <h1 class="display-2">Anime Coy</h1>
      <p class="lead">Merupakan Web database Anime dari yang trending hingga yang tidak trending</p>
    </div>
    </div>
    `;
  }
}
customElements.define('jumbotron-banner', JumbotronBanner);
