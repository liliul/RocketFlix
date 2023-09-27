export default function renderHtml(data) {
  // pegando title
  let tituloFilme = data.title;
  let title = createTags('h1')
  title.setAttribute('class', 'text2')
  title.innerText = tituloFilme;
  addAppend(infos, title)

  // pegando descrição
  let desc = data.overview;
  let descP = createTags('p')
  descP.setAttribute('class', 'text3')
  descP.innerText = desc;
  addAppend(infos, descP)
  
  if (desc === undefined) {
    infos.innerHTML = Err.ErrorSemMovie;
  }

  // pagando a img
  let imgCapa = data.poster_path;
  let poster = createTags('img')
  poster.src = `${IMG_URL}${imgCapa}`;
  addAppend(capa, poster) 

  if (imgCapa === undefined) {
    capa.innerHTML = Err.ErrorSemCapa;
  }

  //pegar data
  let dataFilme = data.release_date;
  let span = createTags('span')
  span.setAttribute('class', 'text2')
  span.innerText = dataFilme;
  addAppend(infos, span)
  
  if(dataFilme === undefined) {
    span.innerHTML = Err.ErrorSemData
  }
}