import 'bootstrap/dist/css/bootstrap.min.css';
import DataSource from "./scripts/data/data_source";
import axios from 'axios';
import './scripts/component/app-bar.js';
import './scripts/component/jumbotron-banner.js'
import './style/style.css';
import './scripts/component/card-group.js'


const $ = (e) => {
    e = document.querySelectorAll(e)
    return e.length > 1 ? e : e[0]
}

const newCardGroup = ({title, expand, data}) => {
    const cardGroup = document.createElement('card-group')
    cardGroup.setAttribute('title', title)
    cardGroup.setAttribute('expand', expand)
    cardGroup.bind = data
    return cardGroup
}

const search = $('form')
const inputSearch = $('input')[0]
const view = $('main')


search.onsubmit = (event) => {
  event.preventDefault()
  if(inputSearch.value){
    view.innerHTML = ''
    DataSource.search(inputSearch.value).then(res => {
      const cardGroup = newCardGroup({
        title : `Hasil dari Pencarian ${inputSearch.value}`,
        data: res.data.data
      })
      view.appendChild(cardGroup)
    })
  }else {
    alert("Input Tidak boleh Kosong")
    location.reload()
  }
}

axios.all([
    DataSource.anime,
  ]).then((res) => {
    const groupTitles = ["Daftar Anime"]
    groupTitles.forEach((title, index) => {
      const cardGroup = newCardGroup({
        title, 
        data: res[index].data.data,
      })
    //   console.log(res[index].data.links.next)
      view.appendChild(cardGroup)
    })
})