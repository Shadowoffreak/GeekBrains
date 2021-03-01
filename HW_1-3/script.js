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

// startGame();

// Задание №1
// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let i = 0;
let maxNumber = 100;
let primeNumbersCount = [];
let primeNumbersBase = [2, 3, 5, 7];

nextPrime:
while (i <= maxNumber) {
    if (!primeNumbersBase.includes(i)) {
        let j = 0;

        while(j < primeNumbersBase.length) {
            if (i % primeNumbersBase[j] === 0 || i === 1) {
                i++;
                continue nextPrime;
            }

            j++;
        }

    }

    primeNumbersCount.push(i);
    i++;
}

console.log(primeNumbersCount);

// Задание №2
// С этого урока начинаем работать с функционалом интернет-магазина.
// Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

const cart = [
    ['apple', 90, 2],
    ['banana', 60, 1.5],
    ['orange', 140, 1],
    ['lemon', 200, 0.5]
]

function countBasketPrice (cart) {
    let resultPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        let countPrice = cart[i][1] * cart[i][2];
        resultPrice += countPrice;
    }

    console.log("Итоговая сумма покупок: " + resultPrice + " руб.");
}

countBasketPrice (cart);

// Задание №3
// Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.

for (let i = 0; i < 10; console.log(i++)) {
    //здесь пусто, надеюсь задание правильно понял;
}

// Задание №4
// Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

let part = '';

for (let i = 0; i < 20; i++) {
    console.log(part += 'x');   
}
