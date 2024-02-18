// Exercise 1
let password = 'гавайи';
let entpass = String(prompt('Введите пароль'))
entpass = entpass.toLowerCase()
if (password == entpass) {
    console.log("Пароль введен верно")
} else {
    console.log("Пароль введен неправильно")
}