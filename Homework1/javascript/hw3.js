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

// Exercise 5
let numbmon = String(prompt('Введите номер месяца!'))
switch (numbmon) {
    case '12':
        console.log('Зима');
        break;
    case '1':
        console.log('Зима');
        break;
    case '2':
        console.log('Зима');
        break;
    case '3':
        console.log('Весна');
        break;
    case '4':
        console.log('Весна');
        break;
    case '5':
        console.log('Весна');
        break;
    case '6':
        console.log('Лето');
        break;
    case '7':
        console.log('Лето');
        break;
    case '8':
        console.log('Лето');
        break;
    case '9':
        console.log('Осень');
        break;
    case '10':
        console.log('Осень');
        break;
    case '11':
        console.log('Осень');
        break;
    default:
        console.log('ошибся с номером месяца!');
        break;
}

// Exercise 6
// Загрузил вместе с Exercise 1

// Exercise 7
let entnumb = prompt('Введите число!')
let isNumber = !isNaN(entnumb);
if (isNumber == false) {
    alert('Это не число!');
    window.location.reload();
} else if (entnumb % 2 === 0) {
        alert('Число четное')
    } else {
        alert('Число нечетное')
};


// Exercise 8
let clientOS = (navigator.userAgent);
if (clientOS.includes("iPhone") === true){
    console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS.includes("iPad") === true) {
    console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS.includes("Macintosh") === true) {
    console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS.includes("Mac") === true) {
    console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS.includes("Android") === true) {
    console.log("Установите версию приложения для Android по ссылке");
} 