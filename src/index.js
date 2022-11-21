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

const newCardGroup = ({title, data}) => {
    const cardGroup = document.createElement('card-group')
    cardGroup.setAttribute('title', title)
    cardGroup.bind = data
    return cardGroup
}

const search = $('form')
const inputSearch = $('input')[0]
const main = $('main')


search.onsubmit = (e) => {
  e.preventDefault()
  if(inputSearch.value){
    main.innerHTML = ''
    DataSource.search(inputSearch.value).then(response => {
      const cardGroup = newCardGroup({
        title : `Hasil dari Pencarian ${inputSearch.value}`,
        data: response.data.data
      })
      main.appendChild(cardGroup)
    })
  }else {
    alert("Input Tidak boleh Kosong")
    location.reload()
  }
}

axios.all([
    DataSource.anime,
  ]).then((response) => {
    const groupTitles = ["Daftar Anime"]
    groupTitles.forEach((title,index) => {
      const cardGroup = newCardGroup({
        title : title,
        data: response[index].data.data,
      })
    //   console.log(res[index].data.links.next)
      main.appendChild(cardGroup)
    })
})