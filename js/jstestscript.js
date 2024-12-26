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
    // console.log(data);
    ///  Передача усіх даних з форми на відміну від elements, де ми пощтучно передаємо ////
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      console.log(`onFormSubmit->name:`, name);
      console.log(`onFormSubmit->value:`, value);
    });
  //////////////////////////////////////////
  
  
  const probaEl = document.querySelector(".proba1");  // Виводимио дані логіна і паролю на екран
  probaEl.append(...email.value)
  probaEl.append(...password.value)
  
  if (!data.email || !data.password)
    {
        alert('всі поля повинні бути заповнені..');
        return ;
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

//////////////////////////
const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
const licenseCheckbox = document.querySelector('.js-license');
const btn = document.querySelector('.js-button');
licenseCheckbox.addEventListener('change', onLicenseChange);

inputEl.addEventListener('input', () => {    ////добавляєм слухача на інпут////
    spanEl.textContent=inputEl.value      /////текстовий контент спану повинен = значенню інпута/////
});
function onLicenseChange(event) {
  console.log('ghjgj');
  console.log(event.currentTarget.checked);
  
  btn.disabled = !event.currentTarget.checked;// кнопка виключена коли не чекнутий чекбокс
}

////////////////////////////END form//////////////////////////
////////////Відкрити, Закрити Модалку/////////////
const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};
refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal)
refs.backdrop.addEventListener('click',onBackdropClick)
function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');  // Вішаєм на Боді клас, можна і на Бекдроп
}
function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}
function onBackdropClick(event) {
  // console.log('Клик по backdrop');

  console.log(event.currentTarget);
  console.log(event.target);

  if (event.currentTarget === event.target) {
    console.log('Кликнули саме в backdrop');
    onCloseModal();                    // Закриваїм модалку клацавши по Бекдропу
  }
}
function onEscKeyPress(event) {
  console.log(event);//закриваємо Esk
  if(event.code==='Escape'){ 
    onCloseModal()
    }
}
////////////********END****Відкрити, Закрити Модалку/////////////
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