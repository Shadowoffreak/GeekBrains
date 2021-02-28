'use strict';

// Урок №2 - игра "Угадайка"

let number;
let attempts;

function resetGame() {
    attempts = 0;
    number = Math.floor(Math.random() * 100);
    console.log("Загаданное число: " + number);
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
console.log("// Задание №1");

{
let a = 1, b = 1, c, d;
console.log("Дан код: \n let a = 1, b = 1, c, d;");

c = ++a; // 2
console.log("c = ++a; // 2 \nОператор 'инкремент' префиксная форма - прибавили, затем вернули результат. Проверка: " + c);

d = b++; // 1
console.log("d = b++; // 1 \nОператор 'инкремент' постфиксная форма - вернули результат, затем прибавили. Проверка: " + d);

c = (2 + ++a); // 5
console.log("c = (2 + ++a); // 5 \nОператор 'инкремент' префиксная форма: 'a = 2' (первая операция) => '++2' возвращает '3'; \nОператор 'сложение': '2 + 3'.  Проверка: " + c);

d = (2 + b++); // 4
console.log("d = (2 + b++); // 4 \nОператор 'инкремент' постфиксная форма: 'a = 2' (вторая операция) => '2++' возвращает '2'; \nОператор 'сложение': '2 + 2'.  Проверка: " + d);

console.log(a); // 3
console.log("console.log(a); // 3 \nОператором 'инкремент' прибавили по '+1' в первой и в третьей операции, где в переменную 'с' сразу возвращался результат операции 'инкремент' за счет префиксной формы.  Проверка: " + a);

console.log(b); // 3
console.log("console.log(b); // 3 \nОператором 'инкремент' прибавили по '+1' во второй и в четвертой операции, но в переменную 'd' не возвращался результат операции 'инкремент' за счет постфиксной формы.  Проверка: " + b);
}

// Задание №2
console.log("// Задание №2");

{
console.log("Чему будет равен x в примере ниже? \n let a = 2; \n let x = 1 + (a *= 2);");

let a = 2;
let x = 1 + (a *= 2);
console.log("A. (a *= 2) - сокращенная запись от (a = a * 2) => (2 * 2) => 4 \nB. x = 1 + 4 => 5; Проверка: " + x);
}

// Задание №3
console.log("// Задание №3");

console.log("Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу: \nесли a и b положительные, вывести их разность; \nесли а и b отрицательные, вывести их произведение; \nесли а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.");

function mathOperation (a, b) {
    let result;
    if (a >= 0 & b >= 0) {
        result = a >= b ? a - b : b - a;
        return "\na и b - положительные числа. Их разность: " + result;
    } else if (a < 0 & b < 0) {
        result = a * b;
        return "\na и b - отрицательные числа. Их произведение: " + result;
    } else {
        result = a + b;
        return "\na и b - разных знаков числа. Их сумма: " + result;
    }
}

console.log("Присвоим a = 15; b = 10 " + mathOperation(15, 10));
console.log("Присвоим a = -5; b = -15 " + mathOperation(-5, -15));
console.log("Присвоим a = -10; b = 20 " + mathOperation(-10, 20));

// Задание №4
console.log("// Задание №4");

{
console.log("Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.");

let a = Math.floor(Math.random() * 16);

    switch (a) {
        case 0: console.log(a++);
        case 1: console.log(a++);
        case 2: console.log(a++);
        case 3: console.log(a++);
        case 4: console.log(a++);
        case 5: console.log(a++);
        case 6: console.log(a++);
        case 7: console.log(a++);
        case 8: console.log(a++);
        case 9: console.log(a++);
        case 10: console.log(a++);
        case 11: console.log(a++);
        case 12: console.log(a++);
        case 13: console.log(a++);
        case 14: console.log(a++);
        case 15: console.log(a);
        break;
        default: console.log("Необходимо число с 0 до 15");
    }
}

// Задание №5
console.log("// Задание №5");

{
console.log("Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.");

    function addition (number1, number2) {
        return number1 + number2;
    }

    function subtraction (number1, number2) {
        return number1 - number2;
    }

    function multiplication (number1, number2) {
        return number1 * number2;
    }

    function division (number1, number2) {
        return number1 / number2;
    }

let a = 10, b = 2;
console.log(`Присвоим a = 10, b = 2, получим: \n- сумму чисел: ${addition(a, b)}\n- вычитание чисел: ${subtraction(a, b)}\n- умножение чисел: ${multiplication(a, b)}\n- деление чисел: ${division(a, b)}`);

// Задание №6
console.log("// Задание №6");

console.log("Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).");

    function mathOperation(arg1, arg2, operation) {
        switch (operation) {
            case addition: 
                return addition(arg1, arg2);
            case subtraction: 
                return subtraction(arg1, arg2);
            case multiplication: 
                return multiplication(arg1, arg2);
            case division: 
                return division(arg1, arg2);
            default:
                return "invalid name operation";
        }
    }
    
console.log(`Проверка функции с тремя параметрами: \n- сумма чисел: ${mathOperation(a, b, addition)}\n- вычитание чисел: ${mathOperation(a, b, subtraction)}\n- умножение чисел: ${mathOperation(a, b, multiplication)}\n- деление чисел: ${mathOperation(a, b, division)}`);
}

// Задание №7
console.log("// Задание №7");

console.log("Сравнить null и 0. Попробуйте объяснить результат.");

console.log("0 - это объект с определенным типом данных и имеет значение с которым можно совершать любые операции. \nnull - это значение, которое означает 'пустоту', отсутствие объекта, это 'пустой ящик, в которой ничего не положили', а вот 'undefined' не имеет даже 'ящика'");

// Задание №8
console.log("// Задание №8");

console.log("С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.");

function power(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1 );
    }
}

console.log("Проверка рекурсивной функции (2 в степени 3): " + power(2, 3));