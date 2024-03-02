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
    const isconfirm = confirm('Хотите продолжить?');
    if (isconfirm === true) {
        Seasons();
    } else {
        alert('До встречи в следующий раз');
    }
}
