'use strict';

// Задание №1
function convertTemperature() {
    let temperatureC = document.getElementById('temperatureC').value;
    let temperatureF = (9 / 5) * +temperatureC + 32;
    document.getElementById('temperatureF').innerHTML = ' °' + temperatureF.toFixed(0);
}

function convertTemperatureAlert() {
    let temperatureC = document.getElementById('temperatureC').value;
    let temperatureF = (9 / 5) * +temperatureC + 32;
    alert('По Фаренгейту: °' + temperatureF.toFixed(0));
}

// Задание №2
let userName, admin;
userName = 'Василий';
admin = userName;
document.getElementById('example2').innerHTML = admin;
console.log('В переменной "admin" значение: ' + admin);

// Задание №3
document.getElementById('example3').innerHTML = 1000 + '108';
console.log('При JS выражении: 1000 + "108" сработает конкатенация, поскольку одно из значений типа "string". Проверка: ' + (1000 + '108'));

// Задание №4
console.log('При атрибуте async по возможности, скрипт выполняется асинхронно - при этом продолжается загрузка страницы. При атрибуте defer скрипт выполняется после полной загрузки страницы.')