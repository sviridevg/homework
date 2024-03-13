// Exercise 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

function callback (a, b) {
return a.age - b.age;
};
console.log(people.sort(callback));


// Exercise 2
function isPositive(number) {
    return number > 0; 
}

function isMale(person) {
    return person.gender === 'male'; 
}

function filter(arr, ruleFunction) {
    const resArr = [];
    for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
        resArr.push(arr[i]);
    }
    }
    return resArr;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
{name: 'Глеб', gender: 'male'},
{name: 'Анна', gender: 'female'},
{name: 'Олег', gender: 'male'},
{name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));

// Exercise 3
let counter = 0;
const intervalId = setInterval(function() {
    counter += 1;
    currentDateFunc();
    if (counter === 10) {
        clearInterval(intervalId);
        console.log("30 секунд прошло");
    }
}, 3000)

function currentDateFunc() {
    const currentDate = new Date();
    console.log(currentDate);
}

// Exercise 4
function delayForSecond(callback) {
    const timer = setTimeout(() => {
        callback()
    }, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})


// Exercise 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  
            cb(); 
        }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi("Глеб"));