import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'


const url = `${BASE_URL}19?api_key=`
const params = {
  API_KEY,
  language,
}

function createTags(tag) {
  return document.createElement(tag)
}
function addAppend(id, element) {
  return id.appendChild(element)
}

async function lendoApi() {

  const response = await fetch(`${url}${API_KEY}`);
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

}
lendoApi()