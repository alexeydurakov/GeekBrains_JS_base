'use strict';

const basketEl = document.querySelector('.basket');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
const basketTotalEl = document.querySelector('.basketTotal')
const basketCountEl = document.querySelector('.cartIconWrap span');
const openBasketBtn = document.querySelector('.cartIconWrap');


/**
 * Открываем содержимое корзины
 */
openBasketBtn.addEventListener('click', function () {
    basketEl.classList.toggle('hidden');
});

/**
 * В корзине хранится количество каждого товара
 * Ключ это id продукта, значение это количество товаров в корзине
 * {1 : 2}
 */
let basket = {};

/**
 * Функция добавляет продукт в корзину
 * @param {number} productId
 */
function addProductInBasket(productId) {
    if (!(productId in basket)) {
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
}

/**
 * Функция увеличивает счетчик количества товаров в корзине
 */
function increaseCountInBasket() {
    basketCountEl.textContent++;
}

/**
 * Функция показывает товар в корзине
 * @param {number} productId 
 */
function showProductInBasket(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductsCount(productId);
        calculateSumProduct(productId);
    } else {
        showNewProductInBasket(productId);
    }
}

/**
 * Функция увеличивает количество товаров в строке в корзине.
 * @param {number} productId
 */
function increaseProductsCount(productId) {
    const productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productCountEl.textContent++;
}

/**
 * Функция пересчитывает стоимость товара умноженное на количество товара
 * в корзине.
 * @param {number} productId
 */
function calculateSumProduct(productId) {
    const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    let totalPriceForRow = (basket[productId] * products[productId].prise).toFixed(2);
    productTotalRowEl.textContent = totalPriceForRow;
}

/**
 * Функция показывает новый товар в корзине.
 * @param {number} productId
 */
function showNewProductInBasket(productId) {
    let productRow = `
        <div class="basketRow">
            <div>${products[productId].name}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>${products[productId].prise}</div>
            <div>
                <span class="productTotalRow" data-productId="${productId}">${products[productId].prise}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}
/**
 * Функция пересчитывает общую стоимость корзины и выводит это значение на страницу.
 */
function calculateTotalSumInBasketAndShow() {
    let totalSum = 0;
    for (let productId in basket) {
        totalSum += basket[productId] * products[productId].prise;
    }
    basketTotalValueEl.textContent = totalSum.toFixed(2);
}

/**
 * Эта функция добавляет новый товар в корзину.
 * @param {number} productId
 */
function addProductIntoBasket(productId) {
    increaseCountInBasket();
    addProductInBasket(productId);
    showProductInBasket(productId);
    calculateTotalSumInBasketAndShow();
}