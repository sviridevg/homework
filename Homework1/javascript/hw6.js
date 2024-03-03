// Exercise 1
const ten = [1, 5, 4, 10, 0, 3];
for (let endTen = 0; endTen < ten.length; endTen++) {
    if (ten[endTen] == 10) break
    console.log(ten[endTen]);
}

// Exercise 2
const masExTwo = [1, 5, 4, 10, 0, 3];
masExTwo.forEach((el, index) => {
    if (el == 4) {
        console.log(`${index}`);
    }
});

// Exercise 3
const masExThree = [1, 3, 5, 10, 20];
let joinmasExThree = masExThree.join(" ");
console.log(joinmasExThree);

// Exercise 4
let masExFour = [];
for (let a = 0; a < 3; a++) {
    let masExFourNest = [];
for (let b = 0; b < 3; b++) {
    masExFourNest.push(1);
}
    masExFour.push(masExFourNest);
}
console.log(masExFour);

// Exercise 5
const masExFive = [1, 1, 1];
masExFive.push(2, 2, 2)
console.log(masExFive);

// Exercise 6
const masExSix = [9, 8, 7, 'a', 6, 5];
masExSix.sort();
masExSix.pop();
console.log(masExSix);

// Exercise 7
const masExSeven = [9, 8, 7, 6, 5];
let numb = Number(prompt('Введите число!'))
let isContains = masExSeven.includes(numb);
function truOfFalse() {
    if (isContains === true) {
        alert("Угадал");
    } else {
        alert("Не угадал");
    }
}
truOfFalse()

// Exercise 8
let text = 'abcdef';
let splitText = text.split("");
splitText.reverse();
text = splitText.join("");
console.log(text);

// Exercise 9
const masExNine = [[1, 2, 3],[4, 5, 6]];
let joinmasExNine = masExNine.join(',');
let masExNineNew = joinmasExNine.split(',').map(Number);
console.log(masExNineNew);

// Exercise 10
const arr = [];
for (let i = 1; i <= 10; i++) {
arr.push(Math.floor(Math.random() * 10) + 1);
}
for (let i = 0; i < arr.length; i++) {
if (i + 2 < arr.length) {
console.log(arr[i] + arr[i + 1]);
} else {
console.log("Последний элемент");
}
}

// Exercise 11
const masExEleven = [2, 4, 6, 8];
const masExElevenSqr = masExEleven.map(function (num) {
    return num ** 2
})
console.log(masExElevenSqr);

// Exercise 12

// Exercise 13

// Exercise 14

// Exercise 15
