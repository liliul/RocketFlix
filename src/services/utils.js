// criar tags
export function createTags(tag) {
  return document.createElement(tag)
}
// add no html
export function addAppend(id, element) {
  return id.appendChild(element)
}
// gera numeros aleatorios ate 1500
export function handleMovei() {
  let numMovies = 1500
  
  return Math.floor(Math.random() * numMovies)
}
export function limparFilme() {
  infos.innerHTML = ''
  capa.innerHTML  = ''
}