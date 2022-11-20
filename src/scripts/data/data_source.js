import axios from 'axios'


const axs = axios.create({ baseURL: 'https://kitsu.io/api/edge/'})

const DataSource = {
    search: function(keyword) {
        return axs.get(`anime?filter[text]=${keyword}`)
    },
    anime: axs.get(`anime?page[limit]=20&page[offset]=5525`)

}

export default DataSource