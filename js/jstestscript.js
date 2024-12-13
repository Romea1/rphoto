//////////*****jstest********** */////////////////
const button = document.querySelector('.jsbutton');
const container = document.querySelector('.js-container');
button.addEventListener('click', onClick);

let step = 0;

function onClick(event) {  ///В цій функції ми пишемо , що треба зробити при нажиманні на кнопку
    event.preventDefault();   ///event надає інформацію про місцезнаходження кнопки і багато іншого
    step += 5;
    container.style.marginLeft = `${step}px`;
      container.style.marginTop = `${step}px`;
  console.log('це клік форма',event.currentTarget);
}
/////////// form/////////
const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();

    const { email, password }=event.currentTarget.elements;  //робим деструктуризацію, elements є тільки на form,  в input нема
  console.log(email.value);
  console.log(password.value);
    const data = {                  //Відправляєм дані на  БЕКЕНД  ///////
        email: email.value,
        password: password.value,
    };
   console.log(data);
   
  if (!data.email || !data.password)
    {
        alert('всі поля повинні бути заповнені..');
        return;
    }
   formEl.reset()

}
///////////////Квадратик буде зникати нажаттям на клавішу////////////////////////
// const container = document.querySelector('.js-container');// container вже є вище
document.addEventListener('keydown', onKey);
function onKey(evt) {
  console.log(evt.code);
  if (evt.code==='Escape'||evt.code==='Enter') {
    container.classList.toggle('tog');///добавляєм клас  дісплей нон
  }
}

////////////////////////////END form//////////////////////////
////робота з картинкою/////
// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Rocks and waterfall"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature
///////////////////////////////////////////

////***Створення HTML елементів 2 способами**** */
// const test= document.querySelector('.jstestList');
// const lastItem = document.createElement('li');
// lastItem.textContent = 'Poly';
// test.append(lastItem);

// const h2 = document.createElement('h2');
// h2.textContent = 'Hello';
// lastItem.append(h2);
// console.dir(lastItem);

// const firstItem = document.createElement('li');
// firstItem.textContent = "Ajax";
// test.append(firstItem);


/////////////*********Інший спосіб insertAdjacentHTML*******//////// */
// const list = `<li><h2>Добавляємо ще одну li</h2></li>`;
// test.insertAdjacentHTML('beforeend',list)
// console.dir([...test.children])
// //////////Рахуємо li (123 іде як 1 обєкт, треба робити [...test.children]/////
// const li = document.createElement('li');

// li.textContent = test.children.length + 2
// test.append(li)  ///////добавилась 8 li в списку//
// console.log(li)
////***   END Створення HTML елементів 2 способами  **** */



//////////******END jstest*******///////////////