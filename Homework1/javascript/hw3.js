// Exercise 1
let password = 'гавайи';
let entpass = String(prompt('Введите пароль'))
entpass = entpass.toLowerCase()
if (password == entpass) {
    console.log("Пароль введен верно")
} else {
    console.log("Пароль введен неправильно")
}

// Exercise 2
let c = 8;
if (c > 0 && c < 10) {
    console.log("Верно")
} else {
    console.log("Неверно")
}
