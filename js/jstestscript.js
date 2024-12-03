//////////*****jstest********** */////////////////
// const jstestForm = document.querySelector('jsbutton');
// form.addEventListener('submit', onFormSubmit);
// function onFormSubmit(event) {
//   event.preventDefault();
//   console.log('це сабміт форма');
// }


////робота з картинкою/////
// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Rocks and waterfall"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature
///////////////////////////////////////////

////***Створення HTML елементів 2 способами**** */
const test= document.querySelector('.jstestList');
const lastItem = document.createElement('li');
lastItem.textContent = 'Poly';
test.append(lastItem);

const h2 = document.createElement('h2');
h2.textContent = 'Hello';
lastItem.append(h2);
console.dir(lastItem);

const firstItem = document.createElement('li');
firstItem.textContent = "Ajax";
test.append(firstItem);


/////////////*********Інший спосіб insertAdjacentHTML*******//////// */
const list = `<li><h2>Добавляємо ще одну li</h2></li>`;

test.insertAdjacentHTML('beforeend',list)
console.dir([...test.children])
//////////Рахуємо li (123 іде як 1 обєкт, треба робити [...test.children]/////
const li = document.createElement('li');

li.textContent = test.children.length + 2
test.append(li)  ///////добавилась 8 li в списку//
console.log(li)



////***   END Створення HTML елементів 2 способами  **** */


//////////******END jstest*******///////////////