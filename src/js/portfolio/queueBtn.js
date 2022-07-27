import { refs } from '../refs';
import { createMarkup } from './createWatchedMarkup';
import { onFilmCardClick } from './modalFilm';
import { movieClass } from './movieClass';
export {onQueueBtn} 



const currentPage = document.querySelector('.current');


if (currentPage.textContent === 'My library') {
  refs.btnQueue.addEventListener('click', () => {
    refs.watchedListRef.classList.add('visually-hidden');
    refs.queueListRef.classList.remove('visually-hidden');   
    refs.watchedListRef.classList.remove('js-gallery__list');
    refs.queueListRef.classList.add('js-gallery__list');
    refs.btnWatched.classList.remove('is-active');
    refs.btnQueue.classList.add('is-active');
    onQueueBtn('queue');
  });
}



async function onQueueBtn(actions) { 
          const currentPage = document.querySelector('.current');
  if (currentPage.textContent === 'Home') {
    return;
  }
    
     if (!refs.queueListRef.classList.contains('actual')) {
    const parsedQueue = await movieClass.getFromLS('queue');

      refs.queueListRef.innerHTML = '';

    if (!parsedQueue || parsedQueue.length === 0) {
        return (refs.queueListRef.innerHTML =
          "<p class = 'empty-queue-notify'>You don't have added movies to your library yet :(<br>but you can still do it <a class= 'notify-link' href='http://localhost:1234/index.html'>here</a></p>");
    }

      refs.queueListRef.insertAdjacentHTML(
        'beforeend',
        parsedQueue
          .map(item => {
            return createMarkup(item);
          })
          .join('')
      );
  } else {
    return;
  }

}


