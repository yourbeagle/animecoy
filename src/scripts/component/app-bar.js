class AppBar extends HTMLElement {
    connectedCallback(){
        this.render()
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href=".">Anime Coy</a>
          <div>
            <form class="d-flex">
              <input class="form-control me-2" type="text" placeholder="Search">
              <input class="btn btn-outline-success" type="submit" value="Search"/>
            </form>
          </div>
        </div>
      </nav>
      
      `;
    }
}
customElements.define('app-bar', AppBar);