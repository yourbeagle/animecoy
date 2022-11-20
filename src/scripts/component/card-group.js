import './card-item.js'



class CardGroup extends HTMLElement {

    connectedCallback(){
        this.title = this.getAttribute('title');
        this.render();
    }

    set bind(animes) {
        this.animes = animes
        this.render()
    }

   

    render(){
        this.innerHTML = `
        <h3 class="mb-3 text-white">${this.title}</h3>
        <div class="row ${this.expand === 'vertical' ? 'gx-3 flex-nowrap overflow-auto' : 'g-2'} mb-4"></div>
        `

        this.renderCards(this.animes);

    }

    renderCards(animes) {
        const cardGroup = this.querySelector('.row')
        animes.forEach((animes, index) => {
          const cardItem = document.createElement('card-item')
          cardItem.setAttribute('class','col-4 col-md-3')
          cardItem.setAttribute('id', index)
          cardItem.bind = animes
          cardGroup.appendChild(cardItem)
        })
    }

}

customElements.define('card-group', CardGroup)