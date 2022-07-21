import { createStartPortfolio } from './createStartPortfolio';

let page = 1;
const options = {
    rootMargin: '400px',
    threshold: 1.0,
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) { 
            console.log(entry.target);  
            createStartPortfolio();
        }
    });
 }, options);


observer.observe(document.querySelector('.scroll-guard'));