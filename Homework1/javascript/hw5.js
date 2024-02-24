// Exercise 1
function smallerOfTwoNumbers(a, b) {
    if (a >= b) {
        return b;
    } else {
        return a;
    }
}
console.log(smallerOfTwoNumbers(8, 4));
console.log(smallerOfTwoNumbers(6, 6));
console.log(smallerOfTwoNumbers(1, 6));
console.log(smallerOfTwoNumbers(9, 12));

// Exercise 2
function isEven(number) {
    if (number % 2 == 0) {
        return "Число четное";
    } else {
        return "Число не четное";
    }
}
let number = prompt("Введите число");
console.log(isEven(number));

// Exercise 3.1 - 3.2
function square(n) {
    return n * n; 
}
const numb = 5;
console.log(square(numb)); 
const squareOfNumber = square(numb);
console.log(squareOfNumber); 

// Exercise 4
function HowOldAreYou() {
    let youOld = prompt("Сколько Вам лет?");
    if (youOld < 0) {
        console.log('Вы ввели неправильное значение');
        return;
    } else if (youOld <= 12) {
        console.log('Привет, друг!');
        return;
    } else {
        console.log('Добро пожаловать!');
    }
}
HowOldAreYou()

// Exercise 5
function algByNumb() {
    let number1 = prompt('Введите первое число!')
    let number2 = prompt('Введите второе число!')
    let isNumber = !isNaN(number1 || number1);
    if (isNumber == false) {
        alert('Одно или оба значения не являются числом');
        return algByNumb();
    } else {
            alert('Произведение данных чисел ' + number1 * number2)
    };
}
algByNumb()

// Exercise 6
function cube() {
    let n = prompt('Введите число!')
    let isN = !isNaN(n);
    if (isN == false){
        console.log('Переданный параметр не является числом');
        return cube();
    } else {
            console.log(n + ' в кубе равняется ' + n ** 3)
    };
}
cube()

// Exercise 7

// Exercise 8