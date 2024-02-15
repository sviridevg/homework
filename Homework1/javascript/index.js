// Exercise 1
let a = 10;
alert (a);
a = 20;
alert (a);

// Exercise 2
const date = (`2007-06-29`);
alert (`Дата выпуска первого iPhone ${date}`);

// Exercise 3
const firstname = `Brendan Eich`;
alert (`Имя создателя языка JavaScript ${firstname}`);

// Exercise 4
let x = 10;
let y = 2;
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
alert (`
    Сумма переменных = ${sum}
    Вычитание переменных = ${difference}
    Умножение переменных = ${product}
    Деление переменных = ${quotient}
`);

// Exercise 5
let result = 2 ** 5
alert (result);

// Exercise 6
a = 9;
let b = 2;
let remainder = a % b;
alert (remainder);

// Exercise 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// Exercise 8
let age = prompt ("Сколько вам лет?");
alert (age);

// Exercise 9.0
let user = {
    name: "Евгений", 
    age: 33,
    isAdmin: true
};

// Exercise 9.1
user["cityOfResidence"] = "Санкт-Петербург";

// Exercise 9.2
user[`age`] = 17;

// Exercise 9.3
delete user["cityOfResidence"];

// Exercise 9.4
let info = prompt (`Какую информацию хотите узнать о пользователе Name или Age?`)
alert (user[info]);