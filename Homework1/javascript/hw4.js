// Exercise 1
let hello = 0;
while (hello < 2) {
    console.log("Привет!");
    hello++
}

// Exercise 2
let numb = 1;
while (numb <= 5) {
    console.log(numb);
    numb++
}

// Exercise 3
let i = 7;
while (i <= 22) {
    console.log(i);
    i++
}

// Exercise 4
var obj = {Коля: '200', Вася: '300', Петя: '400'};
for (var key in obj) {
    console.log(key + ' - зарплата ' + obj[key] + ' долларов')
}

// Exercise 5
let n = 1000;
let num = 0;
while (n >= 50) {
    n = (n / 2);
    num++;
}
console.log(`Результат деления: ${n}. Количество итераций: ${num}`);

// Exercise 6
let friday = 5;
while (friday <= 31) {
friday += 7;
console.log(`Сегодня пятница, ${friday} -е число. Необходимо подготовить отчет.`);
}