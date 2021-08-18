/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/

"use strict"

/**
 * Функция умножает a и b
 *@param {number} a
 *@param {number} b
 *@returns {number} a * b
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * Функция делит a на b
 *@param {number} a
 *@param {number} b
 *@returns {number} a / b
 */
function division(a, b) {
    return a / b;
}

/**
 * Функция складывает a и b
 *@param {number} a
 *@param {number} b
 *@returns {number} a + b
 */
function addition(a, b) {
    return a + b;
}

/**
 * Функция вычитает из a  b
 *@param {number} a
 *@param {number} b
 *@returns {number} a - b
 */
function subtraction(a, b) {
    return a - b;
}


/**
 * Функция получает на вход два параметра и выполняет над ними арифметическое действие
 * @param {number} a
 * @param {number} b
 * @param {string} арифметическое действие operation
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return division(arg1, arg2);
    }
}

alert(mathOperation(15, 5, "+"));
alert(mathOperation(15, 5, "-"));
alert(mathOperation(15, 5, "/"));
alert(mathOperation(15, 5, "*"));