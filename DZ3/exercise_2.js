/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
Организовать такой массив для хранения товаров в корзине;
Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

"use strict";

var basket = [
    { id: 1, name: "shirt", quantity: 1, price: 1500 },
    { id: 2, name: "sneakers", quantity: 2, price: 1000 },
    { id: 3, name: "pants", quantity: 3, price: 2000 },
    { id: 4, name: "scarf", quantity: 1, price: 800 },
];

function countBasketPrice(basket) {
    let sumPrice = 0
    basket.forEach(function (element) {
        sumPrice += element.quantity * element.price
    });
    return sumPrice;
}


alert("Сумма товаров в корзине: " + countBasketPrice(basket));