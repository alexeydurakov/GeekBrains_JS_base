/*
* С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.
*/

"use strict";

/**
 * Функция принимает два параметра и вычисляет степень двух чисел
 * @param {number} val - основание степени
 * @param {number} pow - степень
 * @return {number} - val в степени pow
 */

function power(val, pow) {
    if (pow == 1) {
        return val;
    }
    if (pow != 1) {
        return val * power(val, pow - 1);
    }
}

alert(power(5, 1));
alert(power(5, 2));
alert(power(2, 3));