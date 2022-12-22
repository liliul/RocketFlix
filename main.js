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

  const response = await fetch(`${url}${API_KEY}&${language}`);
  console.log(response)
  const data = await response.json();

  console.log(data)

  const infos = document.querySelector('#infos')
  

  let filme = data.original_title
  let title = createTags('h1')
  title.setAttribute('class', 'text2')
  title.innerText = filme
  addAppend(infos, title)


  let desc = data.overview
  console.log('desc: ',desc)
  let descP = createTags('p')
  descP.setAttribute('class', 'text3')
  descP.innerText = desc
  addAppend(infos, descP)
  
  if (desc === undefined) {
    infos.innerHTML = `<p class="text2">Ops, hoje não é dia de assistir filme.
    Bora codar! 🚀</p>`
  }

  const capa = document.querySelector('#capa')
  let img = data.poster_path
  let poster = createTags('img')
  poster.src = `${IMG_URL}${img}`
  addAppend(capa, poster) 
  console.log('img: ',img)
  if (img === undefined) {
    capa.innerHTML = '<img src="./assets/notFound.jpg">'
  }
}
lendoApi()

