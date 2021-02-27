'use strict';

// Урок №2 - игра "Угадайка"

let number;
let attempts;

function resetGame() {
    attempts = 0;
    number = Math.floor(Math.random() * 100);
    console.log(number);
}

function tryGuessNumber() {
    const userAnswer = parseInt(prompt('Введите число от 0 до 100 или -1 для выхода'));

    if (userAnswer === -1) return alert('До свидания!');

    if (isNaN(userAnswer)) {
        alert('Необходимо ввести число от 0 до 100');
        tryGuessNumber();
        return;
    }

    attempts++;

    if (userAnswer > number) {
        alert('Попробуйте число меньше');
    } else if (userAnswer < number) {
        alert('Попробуйте число больше');
    } else {
        alert('Поздравляю! Вы угадали число с ' + attempts + ' попытки(ок)')
        if (!confirm('Хотите сыграть еще?')) return alert('До свидания!');
        resetGame();
    }

    tryGuessNumber();

}

resetGame();

// Задание №1
