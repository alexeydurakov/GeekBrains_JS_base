/*
Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
*/

"use strict";

let a = askValueVariables();
alert(returnNumbers(a));

/**
 * Функция возвращвет числа от a до 15
 * @param {number} a 
 * @returns {string}
 */
function returnNumbers(a) {
    switch (a) {
        case 0:
            return "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15";
        case 1:
            return "2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15";
        case 2:
            return "3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15";
        case 3:
            return "4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15";
        case 4:
            return "5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15";
        case 5:
            return "6, 7, 8, 9, 10, 11, 12, 13, 14, 15";
        case 6:
            return "7, 8, 9, 10, 11, 12, 13, 14, 15";
        case 7:
            return "8, 9, 10, 11, 12, 13, 14, 15";
        case 8:
            return "9, 10, 11, 12, 13, 14, 15";
        case 9:
            return "10, 11, 12, 13, 14, 15";
        case 10:
            return "11, 12, 13, 14, 15";
        case 12:
            return "13, 14, 15";
        case 13:
            return "14, 15";
        case 14:
            return "15";
        case 15:
            return "";
        default:
            return "Число вне диапазона"
    }
}
/**
 * Функция где запрашивают у пользователя значение 
 */
function askValueVariables() {
    return parseInt(prompt("Введите целое число от 0 до 15: "));
}