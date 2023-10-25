import {
  API_KEY,
  BASE_URL,
  language,
} from './utils/token.js';

import { fetchApi } from './services/fetchApi.js';
import { handleMovei, limparFilme } from './services/utils.js';
import RenderHtml from './component/renderHtml.js';

const infos = document.querySelector('#infos');
const capa = document.querySelector('#capa');
const buttonReload = document.querySelector('#buttonReload');


buttonReload.addEventListener('click',lendoApi)

// lendo api
async function lendoApi() {
  limparFilme()
  
  let numMovies = handleMovei()

  const url = `${BASE_URL}${numMovies}?api_key=`;

  const data = await fetchApi(`${url}${API_KEY}&${language}`);
  
  RenderHtml(data)
}
