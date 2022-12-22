import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

function handleMovei() {
  let numMovies = 1000
  
  return Math.floor(Math.random() * numMovies)

}
let numMovies = handleMovei()
console.log(numMovies)

const url = `${BASE_URL}${numMovies}?api_key=`

function createTags(tag) {
  return document.createElement(tag)
}
function addAppend(id, element) {
  return id.appendChild(element)
}

async function lendoApi() {

  const response = await fetch(`${url}${API_KEY}&language=${language}`);
  const data = await response.json();

  console.log(data)
  let filme = data.original_title
  let overview = data.overview
  const desc = document.querySelector('#desc')
  console.log(overview)
  const infos = document.querySelector('#infos')
  let title = createTags('h1')
  title.setAttribute('class', 'text2')
  title.innerText = filme
  addAppend(infos, title)

  let span = createTags('p')
  span.setAttribute('class', 'text3')
  span.innerText = overview
  addAppend(infos, span)


  const capa = document.querySelector('#capa')
  let img = data.poster_path
  let poster = createTags('img')
  poster.src = `${IMG_URL}${img}`
  addAppend(capa, poster) 
}
lendoApi()

