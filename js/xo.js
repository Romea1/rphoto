const container = document.querySelector(".js-content");
console.log(container);
const wins = [  // Виграшна комбінація ходів
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];
let player = "X"; // Перший починає хід хрестик

let historyX = [];
let history0 = [];

function createMarkup(){  //Функція генерування розмітки
let markup = "";
for (let i = 1; i < 10; i+=1){

    markup += `<div class="item js-item" data-id="${i}"></div>`;  // data-id="${i} для того щоб записувати історію ходів гравця
        // markup += `<div class="item"></div>`;
}
    console.log(markup);
container.innerHTML = markup;  // innerHTML для того щоб ми могли перемальовувати нашу розмітку після кожної гри
}
createMarkup();
container.addEventListener("click", onClick);

function onClick(evt) {
    console.log(evt.currentTarget);
    console.log(evt.target);
    const { target } = evt;
    if (!target.classList.contains("js-item") || target.textContent) { // Якщо наш елемень
        return;
    }
    let result = false;
        const id = Number(target.dataset.id);
    if (player === "X") {
        historyX.push(id);
        result = isWinner(historyX);                   // якшо клітинку вже не порожня, то ми вже не можему туди шось поставити
    } else {
        history0.push(id);
         result = isWinner(history0);   
    }
        target.textContent = player;   
    if (result) {
        console.log(`Переможець ${player}🍓`);
        alert(`Переможець ${player}🍓`)
        resetGame();
        return
      
}

    console.log('x', historyX);
    console.log('0', history0);
    console.log(isWinner(historyX));


    player = player === "X" ? "0" : "X";  //робим умову якшо був хрестик, тоді буде нулик
}
function isWinner(arr) {
    return wins.some((item) => item.every(id=>arr.includes(id)));
}

function resetGame() {  // Робимо скидання на початок гри
    createMarkup();
    historyX = [];
    history0 = [];
    player = 'X';
}