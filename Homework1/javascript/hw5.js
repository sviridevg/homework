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

// Exercise 6

// Exercise 7

// Exercise 8