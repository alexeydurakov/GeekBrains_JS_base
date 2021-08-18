/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
    если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму;
    ноль можно считать положительным числом.
*/

"use strict";

let a;
let b;

a = askValueVariables();
b = askValueVariables();

alert(calculateValues(a, b));


/**
 * Функция где запрашивают у пользователя значение 
 */
function askValueVariables() {
    return parseInt(prompt("Введите первое число"));
}

/**
 * Функция вычисления
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function calculateValues(a, b) {
    if (a >= 0 && b >= 0) {
        return a - b;
    }
    if (a < 0 && b < 0) {
        return a * b;
    }
    if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
        return a + b;
    }
}
