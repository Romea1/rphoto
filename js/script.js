const titleEl = document.createElement("h1");
titleEl.classList.add('page-title');
titleEl.textContent = 'Тустування script.js';

const imageEl = document.createElement('img');
imageEl.src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260";
imageEl.alt = "White and Black Long Fur Cat";
imageEl.width = 640;

const jsBlockEl = document.querySelector('.gallery');
jsBlockEl.prepend(imageEl)
jsBlockEl.prepend(titleEl)


const ul = document.querySelector('.site-nav');//ul готова class="site-nav"//
const li = document.createElement('li');
li.classList.add('site-nav__item');
const a = document.createElement('a');
a.classList.add('site-nav__link');
a.textContent = 'Особистий кабінет';
a.href = "./portfolio.html";
li.append(a); //a кладемо в li
ul.append(li)


