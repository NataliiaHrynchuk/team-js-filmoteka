function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequirec45d;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequirec45d=n),n.register("kB3cp",(function(e,t){var r=n("krGWQ");const o="preference-theme";let s="light";function a(e){e.preventDefault();r.refs.themeBtnHtml.classList.toggle("js-light")?(s="light",r.refs.bodyHtml.classList.remove("dark"),r.refs.backdrop.classList.remove("darkModal"),d()):(s="dark",r.refs.bodyHtml.classList.add("dark"),r.refs.backdrop.classList.add("darkModal"),l()),localStorage.setItem(o,s)}function i(e){e.preventDefault();r.refs.themeBtnLibrary.classList.toggle("js-light")?(s="light",r.refs.bodyLibrary.classList.remove("dark"),r.refs.backdrop.classList.remove("darkModal"),d()):(s="dark",r.refs.bodyLibrary.classList.add("dark"),r.refs.backdrop.classList.add("darkModal"),l()),localStorage.setItem(o,s)}function l(){r.refs.lightToggleIcon.classList.add("invisible"),r.refs.darkToggleIcon.classList.remove("invisible")}function d(){r.refs.lightToggleIcon.classList.remove("invisible"),r.refs.darkToggleIcon.classList.add("invisible")}!function(){s=localStorage.getItem(o),r.refs.bodyHtml&&(null===s&&(s="light",localStorage.setItem(o,s)),"light"===s?(r.refs.bodyHtml.classList.remove("dark"),r.refs.themeBtnHtml.classList.add("js-light"),r.refs.backdrop.classList.remove("darkModal"),d()):(r.refs.bodyHtml.classList.add("dark"),r.refs.themeBtnHtml.classList.remove("js-light"),r.refs.backdrop.classList.add("darkModal"),l()));r.refs.bodyLibrary&&("light"===s?(r.refs.bodyLibrary.classList.remove("dark"),r.refs.themeBtnLibrary.classList.add("js-light"),r.refs.backdrop.classList.remove("darkModal"),d()):(r.refs.bodyLibrary.classList.add("dark"),r.refs.themeBtnLibrary.classList.remove("js-light"),r.refs.backdrop.classList.add("darkModal"),l()))}(),function(){r.refs.bodyHtml&&r.refs.themeBtnHtml.addEventListener("click",a);r.refs.bodyLibrary&&r.refs.themeBtnLibrary.addEventListener("click",i)}()})),n.register("krGWQ",(function(t,r){e(t.exports,"refs",(function(){return o}));const o={galleryContainer:document.querySelector(".gallery-container"),gallery:document.querySelector(".js-gallery__list"),backdrop:document.querySelector("#backdrop"),body:document.querySelector("body"),btnCloseModalFilm:document.querySelector("#btn-close-modal"),imageModal:document.querySelector("#imageModal"),modalTitle:document.querySelector("#title"),modalTitleOriginal:document.querySelector("#titleOriginal"),voteModal:document.querySelector("#vote"),votesModal:document.querySelector("#votes"),popularityModal:document.querySelector("#popularity"),genreModal:document.querySelector("#genre"),overviewModal:document.querySelector("#overview"),modalBtn:document.querySelector(".js-modal-button"),searchForm:document.getElementById("form"),searchError:document.getElementById("input-error"),searchInput:document.querySelector('input[name="search"]'),modalBtnWatched:document.querySelector('[data-actions="watched"]'),modalBtnQueue:document.querySelector('[data-actions="queue"]'),btnQueue:document.querySelector(".queue-js"),savedQueue:localStorage.getItem("queue"),savedWatched:localStorage.getItem("watched"),btnWatched:document.querySelector(".watched-js"),queueListRef:document.querySelector(".js-queue__list"),watchedListRef:document.querySelector(".js-library__list"),themeBtnLibrary:document.querySelector("#theme-toggle__library"),themeBtnHtml:document.querySelector("#theme-toggle__html"),lightToggleIcon:document.querySelector(".lightToggleIcon"),darkToggleIcon:document.querySelector(".darkToggleIcon"),bodyHtml:document.querySelector("#body-html"),bodyLibrary:document.querySelector("#body-library"),modalFilmBackBlure:document.querySelector(".modal-film-back"),modalFilmBox:document.querySelector(".modal-film"),searchBox:document.querySelector(".search-box"),btnLibraryClickMe:document.querySelector(".btn"),registerFormCreatFormSignUp:document.getElementById("creatFormSignUp"),divRegisterError:document.getElementById("divRegisterError"),formaLoginCreatRegister:document.getElementById("formaLoginCreatRegister"),signinForm:document.getElementById("login-div"),signupForm:document.getElementById("register-div"),btnSignupForm:document.getElementById("register-btn"),btnSigninForm:document.getElementById("login-btn"),btnLogin:document.getElementById("btnLogin"),btnLoginout:document.getElementById("log-out-btn"),btnEmptyLibraryBox:document.querySelector("#btn-empty-box")}})),n.register("eVfv9",(function(t,r){e(t.exports,"onWatchedBtn",(function(){return i}));var o=n("krGWQ"),s=n("61roO");n("ghZJP");var a=n("b3Dox");async function i(e){if("Home"!==document.querySelector(".current").textContent&&!o.refs.watchedListRef.classList.contains("actual")){const t=await a.movieClass.getFromLS("watched"),r=a.movieClass.getFromLS("queue");if("watched"==e&&(o.refs.watchedListRef.innerHTML=""),"queue"==e&&(o.refs.queueListRef.innerHTML=""),(!t||0===t.length)&&"watched"==e)return o.refs.watchedListRef.innerHTML="<li class = 'empty-queue-notify'><p>You don't have added movies to your library yet :(</p></li>";if((!r||0===r.length)&&"queue"==e)return o.refs.queueListRef.innerHTML="<p class = 'empty-queue-notify'>You don't have movies yet :(</p>";"watched"==e&&o.refs.watchedListRef.insertAdjacentHTML("beforeend",t.map((e=>(0,s.createMarkup)(e))).join("")),"queue"==e&&o.refs.queueListRef.insertAdjacentHTML("beforeend",t.map((e=>(0,s.createMarkup)(e))).join(""))}}"My library"===document.querySelector(".current").textContent&&o.refs.btnWatched.addEventListener("click",(()=>{o.refs.watchedListRef.classList.remove("visually-hidden"),o.refs.queueListRef.classList.add("visually-hidden"),o.refs.watchedListRef.classList.add("js-gallery__list"),o.refs.queueListRef.classList.remove("js-gallery__list"),o.refs.queueListRef.classList.remove("js-gallery__list"),o.refs.btnQueue.classList.remove("is-active"),o.refs.btnWatched.classList.add("is-active")})),i("watched")})),n.register("61roO",(function(t,r){e(t.exports,"createMarkup",(function(){return a}));var o=n("b3Dox"),s=n("kVIFr");function a({original_title:e,original_name:t,id:r,genre_ids:n,release_date:a,first_air_date:i,poster_path:l,vote_average:d}){e||(e=t);let c=`https://image.tmdb.org/t/p/w500${l}`;return l||(c="https://i.ibb.co/BrYLsTv/default-movie-poster-min.jpg"),`<li class="gallery_card__item" data-id=${r}>\n  <a href="./" class="gallery_card__link">\n      <div class="gallery_thumb">\n          <img src=${c} alt="movie cover" loading='lazy' class="gallery_card__img">\n      </div>\n      <div class="gallery_info">\n          <h3 class="gallery_info__name">${e}</h3>\n          <div class = "gallery_info__about">\n              <p class = "gallery_info__genres">${o.movieClass.makeGenresList(n,s.genres)?o.movieClass.makeGenresList(n,s.genres):"No info"}</p>\n              <p class = "gallery_info__separator">|</p>\n              <p class = "gallery_info__year">${o.movieClass.modifyDate(a,i)?o.movieClass.modifyDate(a,i):"No info"}</p>\n              <span class = "gallery_info__rate">${d.toFixed(2)}</span>\n          </div>\n      </div>\n  </a>\n</li>`}})),n.register("b3Dox",(function(t,r){e(t.exports,"movieClass",(function(){return a}));var o=n("7uqXK");let s=1;const a=new class{async fetchPopularMovies(){const e=await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=5692dca6012d3660a336300872bd664c&page=${s}`);return s+=1,await e.json()}async fetchSearchedMovies(e){try{this.page+=1;const t=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5692dca6012d3660a336300872bd664c&language=en-US&page=${this.page}&include_adult=false&query=${e}`);return await t.json()}catch(e){console.log(e)}}saveToLocalStorageFindedFilms(e){localStorage.setItem("findFilms",JSON.stringify(e.results))}addToLocalStorageFindedFilms(e){const t=this.getFromLS("findFilms");e.results.map((e=>{t.push(e)})),localStorage.setItem("findFilms",JSON.stringify(t))}saveToLibraryMovieInLS(e,t){let r=this.getFromLS(`${t}`);r||(r=[]),r.push(e),localStorage.setItem(`${t}`,JSON.stringify(r))}removeFromLibraryMovieInLS(e,t){let r=this.getFromLS(`${t}`);const o=r.findIndex((t=>t.id==e.id));r.splice(o,1),localStorage.setItem(`${t}`,JSON.stringify(r))}changeModalBtnName(e,t,r){return o.btnModalClass.isFilmIncludesLSLibrary(t,r)?e.textContent=`remove from ${r}`:e.textContent=`add to ${r}`}getFromLS(e){const t=localStorage.getItem(`${e}`);try{return JSON.parse(t)}catch(e){"SyntaxError"===e.name&&console.log("Ошибка парса JSON")}}isModalFilmIncludesLS(e,t){const r=a.getFromLS(t);return r.find((e=>{e.id}))}modifyDate(e,t){return e?e.slice(0,4):t?t.slice(0,4):""}modifyGenres(e){const t=[];for(let r of e)if(null!==l[r]&&void 0!==l[r]){if(2===t.length){t.push("Other");break}t.push(l[r])}return Object.values(t).join(", ")}makeGenresList(e,t){const r=[];for(let o of e){const e=t.findIndex((e=>e.id==o));if(null!==t[e]&&void 0!==t[e]){if(2===r.length){r.push("Other");break}r.push(t[e].name)}}return Object.values(r).join(", ")}makeAllMoodalGenresList(e,t){const r=[];for(let o of e){const e=t.findIndex((e=>e.id==o));null!==t[e]&&void 0!==t[e]&&r.push(t[e].name)}return Object.values(r).join(", ")}parseFindedFilms(){const e=localStorage.getItem("findFilms");let t=[];try{t=JSON.parse(e)}catch(e){"SyntaxError"===e.name&&console.log("Ошибка парса JSON")}return t}searchFilmByIdInLS(e){return a.parseFindedFilms().find((t=>{if(t.id===Number(e))return t}))}constructor(){this.storageWatched=[],this.storageQueue=[]}};const i=new class{changeGenresToBeUsable(e,t={}){e.genres.map((e=>(t[e.id]=e.name,t)))}async parseGenres(){await this.saveGenres();const e=localStorage.getItem("genres");let t={};try{t=JSON.parse(e)}catch(e){console.log(e),"SyntaxError"===e.name&&console.log("Ошибка парса JSON")}return t}async saveGenres(){try{return await this.fetchGenresList().then((e=>{const t={};return this.changeGenresToBeUsable(e,t),localStorage.setItem("genres",JSON.stringify(t))}))}catch(e){console.log(e)}}async fetchGenresList(){const e=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=5692dca6012d3660a336300872bd664c&language=en-US");return await e.json()}makeGenresArrayMarkup(e,t){const r=[];for(id of e)if(null!==t[id]&&void 0!==t[id]){if(2===r.length){r.push("Other");break}r.push(t[id])}return Object.values(r).join(", ")}constructor(){}},l=(i.parseGenres(),i.parseGenres())})),n.register("7uqXK",(function(t,r){e(t.exports,"btnModalClass",(function(){return s})),n("krGWQ");var o=n("b3Dox");const s=new class{isFilmIncludesLSLibrary(e,t){const r=o.movieClass.getFromLS(`${t}`);return null!==r&&r.find((t=>{if(t.id==e)return!0}))}isFilmIncludesLSQueue(e){const t=o.movieClass.getFromLS("queue");return null!==t&&t.find((t=>{if(t.id==e)return!0}))}isFilmIncludesLSWatched(e){const t=o.movieClass.getFromLS("watched");return null!==t&&t.find((t=>{if(t.id==e)return!0}))}}})),n.register("kVIFr",(function(t,r){e(t.exports,"genres",(function(){return o}));const o=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]})),n.register("ghZJP",(function(e,t){var r=n("krGWQ"),o=n("b3Dox"),s=n("7uqXK"),a=n("gduSZ");r.refs.galleryContainer.addEventListener("click",(async function(e){r.refs.modalBtn.addEventListener("click",a.onModalBtnClick),e.preventDefault(),r.refs.imageModal.src="",r.refs.modalTitle.textContent="",r.refs.modalTitleOriginal.textContent="",r.refs.voteModal.textContent="",r.refs.votesModal.textContent="",r.refs.popularityModal.textContent="",r.refs.genreModal.textContent="",r.refs.overviewModal.textContent="";const t="https://image.tmdb.org/t/p/w500",n=e.target.closest("li");if(!n)return;const i=n.getAttribute("data-id"),l=await fetch(`https://api.themoviedb.org/3/movie/${i}?api_key=5692dca6012d3660a336300872bd664c`).then((e=>e.json())).then((e=>!1===e.success?o.movieClass.searchFilmByIdInLS(i):e));if(l){var d,c;const e=null===(d=l.genres)||void 0===d?void 0:d.map((e=>e.name)).join(", ");!function(){null!=r.refs.searchForm&&(r.refs.searchForm.style.display="none");null!=r.refs.searchBox&&r.refs.searchBox.classList.add("is-hidden")}(),r.refs.modalBtnQueue.setAttribute("data-id",`${i}`),r.refs.modalBtnWatched.setAttribute("data-id",`${i}`),r.refs.imageModal.src=`${t}${l.poster_path}`,l.poster_path||(r.refs.imageModal.src="https://i.ibb.co/BrYLsTv/default-movie-poster-min.jpg"),r.refs.modalTitle.textContent=`${l.title?l.title:l.name}`,r.refs.modalTitleOriginal.textContent=`${l.original_title?l.original_title:l.original_name}`,r.refs.voteModal.textContent=`${null==l||null===(c=l.vote_average)||void 0===c?void 0:c.toFixed(2)}`,r.refs.votesModal.textContent=`${l.vote_count}`,r.refs.popularityModal.textContent=`${l.popularity}`,r.refs.genreModal.textContent=`${e}`,l.genres||(r.refs.genreModal.textContent="No info"),r.refs.overviewModal.textContent=`${l.overview}`,l.backdrop_path?r.refs.backdrop.style.background=`url(${t}${l.backdrop_path}) no-repeat center`:r.refs.backdrop.style.background="",r.refs.backdrop.style.backgroundSize="cover",r.refs.modalFilmBox.classList.remove("is-hidden"),r.refs.backdrop.classList.remove("is-hidden"),r.refs.body.classList.add("backdrop-body-block-scroll"),f(i,r.refs.modalBtnWatched,r.refs.modalBtnWatched.getAttribute("data-actions")),f(i,r.refs.modalBtnQueue,r.refs.modalBtnQueue.getAttribute("data-actions")),f(i,r.refs.modalBtnWatched,r.refs.modalBtnWatched.getAttribute("data-actions")),f(i,r.refs.modalBtnQueue,r.refs.modalBtnQueue.getAttribute("data-actions"))}function u(e){e.target===e.currentTarget&&m()}function m(){r.refs.modalBtn.removeEventListener("click",a.onModalBtnClick),r.refs.btnCloseModalFilm.removeEventListener("click",m),r.refs.backdrop.removeEventListener("click",u),r.refs.modalFilmBackBlure.removeEventListener("click",u),null!=r.refs.searchBox&&(r.refs.searchForm.style.display=null,setTimeout((function(){r.refs.searchBox.classList.remove("is-hidden")}),130)),r.refs.backdrop.classList.add("is-hidden"),r.refs.body.classList.remove("backdrop-body-block-scroll")}function f(e,t,r){s.btnModalClass.isFilmIncludesLSLibrary(e,r)?t.textContent=`remove from ${r}`:t.textContent=`add to ${r}`}r.refs.btnCloseModalFilm.addEventListener("click",m),window.addEventListener("keydown",(function(e){"Escape"===e.key&&m()})),r.refs.backdrop.addEventListener("click",u),r.refs.modalFilmBackBlure.addEventListener("click",u)}))})),n.register("gduSZ",(function(t,r){e(t.exports,"onModalBtnClick",(function(){return d})),n("krGWQ");var o=n("b3Dox"),s=n("7uqXK"),a=n("zcbj7"),i=n("eVfv9"),l=n("5yQ3P");function d(e){e.preventDefault();const t=e.target.closest("li");if(!t)return;const r=t.getAttribute("data-id"),n=t.getAttribute("data-actions"),d=o.movieClass.searchFilmByIdInLS(r),c=document.querySelector(".current");s.btnModalClass.isFilmIncludesLSLibrary(r,n)?((0,a.removeFilmStickers)(d,n),o.movieClass.removeFromLibraryMovieInLS(d,n)):((0,a.createFilmStickers)(d,n),o.movieClass.saveToLibraryMovieInLS(d,n)),"My library"==c.textContent&&"watched"==n?(0,i.onWatchedBtn)(n):"My library"==c.textContent&&"queue"==n&&(0,l.onQueueBtn)(n),o.movieClass.changeModalBtnName(t,r,n)}})),n.register("zcbj7",(function(t,r){e(t.exports,"createGalleryStickers",(function(){return a})),e(t.exports,"createFilmStickers",(function(){return i})),e(t.exports,"removeFilmStickers",(function(){return l}));var o=n("7uqXK"),s=n("b3Dox");function a(){s.movieClass.parseFindedFilms().forEach((e=>{o.btnModalClass.isFilmIncludesLSLibrary(e.id,"watched")&&i(e,"watched"),o.btnModalClass.isFilmIncludesLSLibrary(e.id,"queue")&&i(e,"queue")}))}function i(e,t){const r=document.querySelector(`[data-status='${e.id}']`);if(r&&!document.querySelector(`[data-id="${e.id}${t}"]`)){if("watched"==t){const o="watched";r.insertAdjacentHTML("beforeend",`<button type="button" class="status-btn" data-id=${e.id}${t}>${o}</button>`)}if("queue"==t){const o="in queue list";r.insertAdjacentHTML("afterbegin",`<button type="button" class="status-btn" data-id=${e.id}${t}>${o}</button>`)}}}function l(e,t){const r=document.querySelector(`[data-id='${e.id}${t}']`);r&&r.remove()}n("krGWQ")})),n.register("5yQ3P",(function(t,r){e(t.exports,"onQueueBtn",(function(){return i}));var o=n("krGWQ"),s=n("61roO");n("ghZJP");var a=n("b3Dox");async function i(e){if("Home"!==document.querySelector(".current").textContent&&!o.refs.queueListRef.classList.contains("actual")){const e=await a.movieClass.getFromLS("queue");if(o.refs.queueListRef.innerHTML="",!e||0===e.length)return o.refs.queueListRef.innerHTML="<li class = 'empty-queue-notify'><p>You don't have added movies to your library yet :(</p></li>";o.refs.queueListRef.insertAdjacentHTML("beforeend",e.map((e=>(0,s.createMarkup)(e))).join(""))}}"My library"===document.querySelector(".current").textContent&&o.refs.btnQueue.addEventListener("click",(()=>{o.refs.watchedListRef.classList.add("visually-hidden"),o.refs.queueListRef.classList.remove("visually-hidden"),o.refs.watchedListRef.classList.remove("js-gallery__list"),o.refs.queueListRef.classList.add("js-gallery__list"),o.refs.btnWatched.classList.remove("is-active"),o.refs.btnQueue.classList.add("is-active"),i("queue")}))})),n.register("aHRt8",(function(e,t){"undefined"!=typeof window&&window.addEventListener("scroll",(()=>{window.scrollY>=700?document.querySelector("#cont-back-to-top").classList.add("_show"):document.querySelector("#cont-back-to-top").classList.remove("_show")}))})),n.register("gjiCh",(function(e,t){let r=document.querySelector(".mask");window.addEventListener("load",(()=>{r.classList.add("done"),setTimeout((()=>{r.remove()}),1e3)}))})),n.register("9ZdO4",(function(e,t){(()=>{const e={openModalBtn:document.querySelector(".team-data-open"),closeModalBtn:document.querySelector(".team-data-close"),modal:document.querySelector(".team-data"),backdrop:document.querySelector(".backdrop__students")};function t(e){e.target===e.currentTarget&&o()}function r(e){"Escape"===e.code&&o()}function o(){e.modal.classList.add("is-hidden"),e.modal.classList.remove("mount"),document.removeEventListener("keydown",r),document.body.style.overflow="initial"}e.openModalBtn.addEventListener("click",(function(o){o.preventDefault(),document.body.style.overflow="hidden",e.modal.classList.remove("is-hidden"),e.modal.classList.add("mount"),e.backdrop.addEventListener("click",t),document.addEventListener("keydown",r)})),e.closeModalBtn.addEventListener("click",o)})()}));
//# sourceMappingURL=library.b1b52c05.js.map