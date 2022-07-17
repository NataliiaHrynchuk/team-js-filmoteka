import { fetchPopularMovies } from './fetchPopularMovies';
import { createMurkup } from './createGalleryMarkup';
import { refs } from '../refs';
import {
  saveToLocalStorageFindedFilms,
  parsedFindedFilmsFromLS, parseFindedFilms,
} from './localStorage';

// Генерирует разметку популярных фильмов, первой страницы
export default createStartPortfolio();

function createStartPortfolio() {
  return fetchPopularMovies().then(films => {
    saveToLocalStorageFindedFilms(films);

    return refs.gallery.insertAdjacentHTML(
      'beforeend',
      films.results
        .map(film => {
          return createMurkup(film);
        })
        .join('')
    );
  });
}

// ==========Клик по элементу списка - открытие модалки===================

refs.gallery.addEventListener('click', onClickPortfolioItem);

function onClickPortfolioItem(evt) {
  // У каждого элемента списка есть дата-ид по которому находим фильм и рендерим модалку

  evt.preventDefault();

  let li = evt.target.closest('li');
  let id = li.getAttribute('data-id');
  
  if (!li) return;

  const film = searchFilmByIdInLS(id);
  console.log('film', film);
  
  // Вызываем открыть модалку - передаем фильм из локал сторидж
//   openModal();
}

function searchFilmByIdInLS(id) {
  const parsedFindedFilmsFromLS = parseFindedFilms();
  return parsedFindedFilmsFromLS.find(film => {
    if (film.id == id) {
      return film;
    }
  });
}
