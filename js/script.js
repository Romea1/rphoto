// const titleEl = document.createElement("h1");
// titleEl.classList.add('page-title');
// titleEl.textContent = 'Тустування script.js';

// const imageEl = document.createElement('img');
// imageEl.src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260";
// imageEl.alt = "White and Black Long Fur Cat";
// imageEl.width = 640;

// const jsBlockEl = document.querySelector('.gallery');
// jsBlockEl.prepend(imageEl)
// jsBlockEl.prepend(titleEl)


// const ul = document.querySelector('.site-nav');//ul готова class="site-nav"//
// const li = document.createElement('li');
// li.classList.add('site-nav__item');
// const a = document.createElement('a');
// a.classList.add('site-nav__link');
// a.textContent = 'Особистий кабінет';
// a.href = "./portfolio.html";
// li.append(a); //a кладемо в li
// ul.append(li)

// ///////****div-input****/////////
// const inputEl = document.querySelector('.js-input');
// const spanEl = document.querySelector('#name-output');
// inputEl.addEventListener('input', () => {
//    spanEl.textContent=inputEl.value
// })

//////****END div-input*****/////////////




//////******automobile ************/////////////
const cars = [
  {
    id: 1,
    car: "Audi",
    type: "A6",
    price: 30000,
    img: "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a6__551123702f.webp",
    
  },
  {
    id: 2,
    car: "Mercedes-Benz",
    type: "GL-Class",
    price: 30999,
    img: "https://cdn4.riastatic.com/photosnew/auto/photo/mercedes-benz_gl-class__548577034f.webp",
  },
  {
    id: 3,
    car: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 4,
    car: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 5,
    car: "Honda",
    type: "Accord",
    price: 20000,
    number: "+380000000000",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 6,
    car: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
    {
    id: 7,
    car: "AVolkswagen",
    type: "Passat",
    price: 26500 ,
    img: "https://cdn1.riastatic.com/photosnew/auto/photo/volkswagen_passat__543142651f.webp"
  },
  {
    id: 8,
    car: "Audi",
    type: "A6",
    price: 28000,
    img: "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a6__551123702f.webp",
  },
  {
    id: 9,
    car: "Audi",
    type: "Q5",
    price: 18000,
    img: "https://cdn4.riastatic.com/photosnew/auto/photo/audi_q5__551581759f.webp",
  },
  {
    id: 10,
    car: "BMW",
    type: "X1",
    price: 19200 ,
    img: "https://cdn2.riastatic.com/photosnew/auto/photo/bmw_x1__553568622f.webp",
  },
  {
    id: 11,
    car: "Honda",
    type: "Accord",
    price: 20000,
    number: "+380000000000",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 12,
    car: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
   {
    id: 13,
    car: "Audi",
    type: "A6",
    price: 30000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg"
  },
  {
    id: 14,
    car: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 15,
    car: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 16,
    car: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 17,
    car: "Honda",
    type: "Accord",
    price: 20000,
    number: "+380000000000",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 18,
    car: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
    {
    id: 19,
    car: "AVolkswagen",
    type: "Passat",
    price: 26500 ,
    img: "https://cdn1.riastatic.com/photosnew/auto/photo/volkswagen_passat__543142651f.webp"
  },
  {
    id: 20,
    car: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 21,
    car: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 22,
    car: "BMW",
    type: "X1",
    price: 19200 ,
    img: "https://cdn2.riastatic.com/photosnew/auto/photo/bmw_x1__553568622f.webp",
  },
  {
    id: 23,
    car: "Honda",
    type: "Accord",
    price: 20000,
    number: "+380000000000",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 24,
    car: "Audi",
    type: "Q7",
    price: 52500 ,
    img: "https://cdn3.riastatic.com/photosnew/auto/photo/audi_q7__549800078f.webp",
  },
];
 function createMarkup(cars) { // cars - array
    const result = cars.map(carData => {
      const { id = 'none', car, type, price, img } = carData;// Деструктуризація// сказали перебери мені масив за допомогою map , 
       // на кожній ітерації ми отримуємо обєкт нашого автомобіля, деструктуризеємо кожен ключ і для нього створи таку розмітку
        // console.log(carData)
        return `<li data-id='${id}'>                               
        <img src="${img}" alt="${type}" class="car-image" /> 
        <h2 class="car-title">${car}</h2>
        <h3 class="car-type">${type}</h3>
        <span class="car-price">${price}</span>
        <div class='js-favorite'>✩</div>
        </li>`;                         
    });
    //  console.log(result);
   return result.join('');  ///перетворюємо масив в рядок бо insertAdjacentHTML, innerHTML працює з рядками , а map повертає нам масив. 
    //Тому ми за допомогою JOIN зєднуємо елементи масиву в рядок, щоб підлаштуватись що очікує insertAdjacentHTML або innerHTML//
}

const list = document.querySelector('.js-list');   //Захвачуєм <ul>
const markup = createMarkup(cars);

list.insertAdjacentHTML('beforeend', markup);  //Вставляємо <li> в  <ul> // beforeend, beforebegin, afterbegin, afterend-вказує де розміщувати //


const form = document.querySelector('.js-form');  /////// створюємо пошук/////
const formSelect = document.querySelector('.car-select');
const carInput = document.querySelector('.car-input');
const formButton = document.querySelector('.car-button'); 

form.addEventListener('submit', onSubmitHandler);

function onSubmitHandler (event) {
    event.preventDefault();

    const inputValue = carInput.value;
    const selectValue = formSelect.value; // 'car' or 'type'

    const result = cars.filter(car => { // result - filtered array
        return car[selectValue].toLowerCase().includes(inputValue.trim().toLowerCase());//trim- убираєм пробіл///
    })
    

  list.innerHTML = createMarkup(result);//Повернеться нам результат пошуку,Те шо ми отримаємо в результаті
   
}
//Додаємо список обраних автомобілів///
const favoriteList = document.querySelector('.js-favorite-list');
list.addEventListener('click', onClick);  //Додали слухача на клік li
 function onClick(event) {
    // console.log(event.currentTarget);
 
  
   if (event.target.classList.contains('js-favorite')) {
     event.target.classList.add('js-favorite-active'); // Робим шоб зірочка була активна, додаємо клас з іншим кольором
  //  console.log(event.target)   // Якщо натиснуди на зірочку, тоді шось робимо
  //  const id = event.target.closest('li');   // той елемент який викликав подію (зірочка),
   //вказуємо метод closest, вказуємо який елемент нам потрібен(li), тобто дай мені першу бітьківську лішку
   const {id} = event.target.closest('li').dataset; //Деструктуризуємо , кажемо віддай мені з моєї лішки з dataset мій id
   
     console.log(id);
     const { car, type } = cars.find(({ id: carId }) => carId === Number(id));//З масиву cars за допомогою методу find знаходимо наш автомобіль по id.
     //але в нас вже проблема з назвати, тому ми деструктуризуємо як id і змінимо назву на carID. І вказуємо що наш carId має співпадати з тим id по якому ми клікнули(carId === Number(id))
     //Але дата атрибут нам завжди повертає рядок тому потрібно приводити до числа(Number(id) )
     addFavorite(`${car}${type}`)
      console.log(event.currentTarget);
     console.log(event.target)  
 }
  }
function addFavorite(currentCar) {
  favoriteList.insertAdjacentHTML('beforeend',`<li>${currentCar}</li>`) // додаєм розмітку у вигляді лішки
}









////////////Відкрити, Закрити Модалку/////////////
const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};
refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal)
function onOpenModal(){
  document.body.classList.add('show-modal');
}
function onCloseModal() {
  document.body.classList.remove('show-modal');
}
////////////********END****Відкрити, Закрити Модалку/////////////

//////////*******END automobile *********////////////

