class CardItem extends HTMLElement {
    connectedCallback(){
      this.id = this.getAttribute('id')
      this.render()
    }
    
    set bind(anime) {
      this.anime = anime.attributes
      this.render()
    }
    
    render() {
      this.innerHTML = `
        <div class="card bg-secondary overflow-hidden position-relative border-0">
          <img id="${this.id}" src="${this.anime.posterImage.large}" width="100%" alt="${this.anime.titles.en_jp}" />
          <div class="position-absolute bottom-0 w-100 p-3 overlay_card">
            <h5 class="text-light overflow-hidden mb-0 text_title">${this.anime.titles.en_jp}</h5>
                <div class="badge_items">
                    <span class="badge bg-white text-dark">${this.anime.subtype}</span>
                    <span class="badge bg-white text-dark">${this.anime.status}</span>
                    <span class="badge bg-white text-dark">${this.anime.averageRating}</span>
                    <span class="badge bg-white text-dark">${this.anime.ageRatingGuide}</span>
                </div>
                <div id="container_synopsis" class="position-relataive bottom-0 overflow-auto" style="height:250px">
                    <p class="text-light" id="synopsis">${this.anime.synopsis}</p>
                </div>
          </div>
        </div>
      `
    }
  }
  
  customElements.define('card-item', CardItem)