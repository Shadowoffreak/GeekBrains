'use strict';

// Урок №3 - игра "Угадайка 2"

let generatedNumbers = [];
let attemptsCount = 0;

function resetGame() {
    generatedNumbers = [];
    attemptsCount = 0;

    while (generatedNumbers.length < 4) {
        const part = Math.floor(Math.random() * 10);
        if (!generatedNumbers.includes(part)) generatedNumbers.push(part)   // генерация разных чисел;
    }

    console.log(generatedNumbers);
}

function startGame() {
    while(true) {
        const guess = prompt("Угадайте 4 разных положительных числа, загаданных компьютером. Введите -1, чтобы выйти.");

        if (guess === '-1') return alert("Game over");

        if (!isValidGuess(guess)) continue;

        attemptsCount++;

        const result = getGuessPoints(guess);

        if (result[0] !== 4) {
            alert(`Быки: ${result[0]}. Коровы: ${result[1]}.`);
            continue;
        }

        alert("Поздравляем! Вы угадали все цифры. Количество попыток " + attemptsCount);

        if (!confirm("Хотите сыграть еще?")) return alert ("До свидания!");

        resetGame();
    }
}

function isValidGuess(guess) {
    if (guess.length !== 4) return false;   // проверка на кол-во чисел;

    for (let i = 0; i < guess.length; i++) {    // проверка на наличие чисел
        if (isNaN(parseInt(guess[i]))) return false;
    }

    return true;
}

function getGuessPoints(guess) {
    const points = [0, 0];

    for (let i = 0; i < guess.length; i++) {
        if (+guess[i] === generatedNumbers[i]) {    //проверка на совпадение числа + позиции (бык)
            points[0]++;
        } else if (generatedNumbers.includes(+guess[i])) {  //проверка на совпадение числа (корова)
            points[1]++;
        }
    }

    return points;
}

resetGame();

startGame();

// Задание №1
