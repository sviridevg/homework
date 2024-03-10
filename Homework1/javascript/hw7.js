// Exercise 1
let exrOne = 'js';
console.log(exrOne.toLocaleUpperCase());

// Exercise 2
const exrTwoArray = ['Аккумуляторные реноваторы', 'Перфораторы ', 'Аккумуляторные дрели', 'Степлеры и гвоздезабиватели', 'Аккумуляторные фрезеры'];
const exrTwoArraySrh = 'Аккумуляторные';
const filterExrTwoArray = filter(exrTwoArray, exrTwoArraySrh);

function filter(strings, prefix) {
const lowerCasePrefix = prefix.toLowerCase();
return strings.filter((string) => string.toLowerCase().startsWith(lowerCasePrefix));
}
console.log(filterExrTwoArray);

// Exercise 3
const exThree = 32.58884;
console.log(Math.floor(exThree));
console.log(Math.ceil(exThree));
console.log(Math.round(exThree));

// Exercise 4
const exFour = [52, 53, 49, 77, 21, 32];
const minExFour = filterExFour(exFour);
function filterExFour(arr) {
    const min = Math.min(...arr);
    return arr.filter(number => number === min);
}
console.log(minExFour);

// Второе возможное решенеи 
const a = 52;
const b = 53;
const c = 49;
const d = 77;
const f = 21;
const g = 32;
let z = Math.min(a, b, c, d, f, g);
console.log(z);

// Exercise 5
let exFive = Math.random() * 10;
console.log(Math.floor(exFive));

// Exercise 6
function exSeven(n) {
    const exSevenResult = [];
    for (let i = 0; i < n / 2; i++) {
    const randomNumber = Math.floor(Math.random() * n);
    exSevenResult.push(randomNumber);
    }
    return exSevenResult;
}
console.log(exSeven(10));

// Exercise 7
function exSeven(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(exSeven(10, 20));

// Exercise 8
let currentDate = new Date();
console.log(currentDate);
console.log(+myDate);

// Exercise 9
let myDate = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = +myDate + days73;
let daysGo73 = new Date(searchDate);
console.log(daysGo73);

// Exercise 10
const exEleven = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
const exElevenLC = exEleven.map(el => el.toLowerCase());

function startConfirm() {
    const start = confirm('Запомните пожалуйста слова:' + " " + exEleven.join(', ') + ". " + " " + "Для продолжения нажмите ОК")
    if (start === true) {
        checkAnsverArr()
    } else {
        confirmPars()  
    }
}

function checkAnsverArr() {
    let arrAnswer = prompt('Введите слово которое смогли запомнить через запятую');
    let arrAnswerArrCheck = arrAnswer.split(', ');
    let counter = 0;
    for (let i = 0; i < arrAnswerArrCheck.length; i++) {
        if (exElevenLC.includes(arrAnswerArrCheck[i].toLowerCase())) {
            counter++;
        }
    }
    alert(`Количество слов которые Вы запомнили:  "${counter}". Поздравляем Вы молодец.`)
    confirmPars()
}

function confirmPars() {
    const isconfirm = confirm('Хотите сыграть еще 1 игру?');
    if (isconfirm === true) {
        startConfirm();
    } else {
        alert('До встречи в следующий раз');
    }
}
startConfirm()























