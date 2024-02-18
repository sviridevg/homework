// Exercise 1
let password = 'гавайи';
let entpass = String(prompt('Введите пароль'))
entpass = entpass.toLowerCase()
if (password == entpass) {
    console.log("Пароль введен верно")
} else {
    console.log("Пароль введен неправильно")
};

// Exercise 2
let c = 8;
if (c > 0 && c < 10) {
    console.log("Верно")
} else {
    console.log("Неверно")
};

// Exercise 3
let d = 134;
let e = 86;
if (d > 100 || e > 100) {
    console.log("Верно")
} else {
    console.log("Неверно")
};

// Exercise 4
let a = '2';
let b = '3';
let sum = Number(a) + Number(b);
console.log(sum);