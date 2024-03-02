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

// Exercise 6

// Exercise 7

// Exercise 8

// Exercise 9

// Exercise 10

// Exercise 11

// Exercise 12

// Exercise 13

// Exercise 14

// Exercise 15
