// Game Seasons
function Seasons() {
    let numbmon = String(prompt('Введите номер месяца!'))
    if (numbmon == 12 || numbmon == 1 || numbmon == 2) {
        alert('Выбранный Вами месяц относится к времени года Зима');
        confirmPars();
    } else if (numbmon == 3 || numbmon == 4 || numbmon == 5) {
        alert('Выбранный Вами месяц относится к времени года Весна');
        confirmPars();
    } else if (numbmon == 6 || numbmon == 7 || numbmon == 8) {
        alert('Выбранный Вами месяц относится к времени года Лето');
        confirmPars();
    } else if (numbmon == 9 || numbmon == 10 || numbmon == 11) {
        alert('Выбранный Вами месяц относится к времени года Осень');
        confirmPars();
    } else {
        alert('Вы ввели что то не то');
        confirmPars();
    }
}

function confirmPars() {
    const isconfirm = confirm('Хотите поиграть еще?');
    if (isconfirm === true) {
        Seasons();
    } else {
        alert('До встречи в следующий раз!');
    }
}


//Game Words
const exEleven = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
const exElevenLC = exEleven.map(el => el.toLowerCase());

function startConfirm() {
    const start = confirm('Запомните пожалуйста слова:' + " " + exEleven.join(', ') + ". " + " " + "Для продолжения нажмите ОК")
    if (start === true) {
        checkAnsverArr()
    } else {
        confirmPars()  
    }
}

function checkAnsverArr() {
    let arrAnswer = prompt('Введите слово которое смогли запомнить через запятую');
    let arrAnswerArrCheck = arrAnswer.split(', ');
    let counter = 0;
    for (let i = 0; i < arrAnswerArrCheck.length; i++) {
        if (exElevenLC.includes(arrAnswerArrCheck[i].toLowerCase())) {
            counter++;
        }
    }
    alert(`Количество слов которые Вы запомнили:  "${counter}". Поздравляем Вы молодец.`)
    confirmPars()
}

function confirmPars() {
    const isconfirm = confirm('Хотите сыграть еще 1 игру?');
    if (isconfirm === true) {
        startConfirm();
    } else {
        alert('До встречи в следующий раз');
    }
}