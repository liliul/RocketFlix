import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

import { fetchApi } from './services/fetchApi.js';
import { createTags, addAppend, handleMovei } from './services/utils.js';



let numMovies = handleMovei()
// console.log(numMovies)

const url = `${BASE_URL}${numMovies}?api_key=`



// lendo api
async function lendoApi() {

  // const response = await fetch(`${url}${API_KEY}&${language}`);
  // console.log(response)
  // const data = await response.json();
  const data = await fetchApi(`${url}${API_KEY}&${language}`);
  console.log(data)

  const infos = document.querySelector('#infos')
  
  // pegando title
  let filme = data.title
  let title = createTags('h1')
  title.setAttribute('class', 'text2')
  title.innerText = filme
  addAppend(infos, title)

  // pegando descrição
  let desc = data.overview
  // console.log('desc: ',desc)
  let descP = createTags('p')
  descP.setAttribute('class', 'text3')
  descP.innerText = desc
  addAppend(infos, descP)
  
  // se a descrição for undefined 
  if (desc === undefined) {
    infos.innerHTML = `<p class="text2">Ops, hoje não é dia de assistir filme.
    Bora codar! 🚀</p>`
  }

  // pagando a img
  const capa = document.querySelector('#capa')
  let img = data.poster_path
  let poster = createTags('img')
  poster.src = `${IMG_URL}${img}`
  addAppend(capa, poster) 
  // console.log('img: ',img)

  // se a img for undefined
  if (img === undefined) {
    capa.innerHTML = '<img src="./src/assets/notFound.jpg">'
  }

  //pegar data
  let d = data.release_date
  let span = createTags('span')
  span.setAttribute('class', 'text2')
  span.innerText = d
  addAppend(infos, span)
  if(d === undefined) {
    span.innerHTML = ''
  }
}
lendoApi()
