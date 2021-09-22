'use strict';

const pathToImages = 'images';
const pathToProductsImages = `${pathToImages}/featured`;
const featuredItemsEl = document.querySelector('.featuredItems');

/**
 * Функция которая принимает описание продукта и готовит html для вставки в страницу
 * @param {productDTO} product информация о продуктк
 * @returns {string} возвращает html для вставки в страницу
 */
function getProductHTML(product) {
    return `
    <div class="featuredItem">
        <div class="featuredImgWrap">
            <img src="${pathToProductsImages}/${product.image}" alt="${product.name}">
            <div class ="featuredImgDark">
                <button data-productId="${product.id}">
                    <img src="${pathToImages}/cart.svg" alt="">
                    Add to Cart
                </button>
            </div>
        </div>

        <div class="featuredData">
            <div class="featuredName">
                ${product.name}
            </div>
            <div class="featuredText">
                ${product.description}
            </div>
            <div class="featuredPrice">
                ${product.prise}
            </div>
        </div>
    </div>
    `
}

/**
 * Функция вставляет товары в страницу.
 * @param {ProductDTO[]} products массив товаров из файла products.js
 * @param {HTMLDivElement} featuredItemsEl элемент с классом .featuredItems
 */
function insertProductsIntoPage(products, featuredItemsEl) {
    let productsHTML = '';
    for (let product of products) {
        productsHTML += getProductHTML(product);
    }
    featuredItemsEl.insertAdjacentHTML('afterbegin', productsHTML);
}

/**
 * Функция ожидает клик и назначет обработку события в зависимости от id продукта
 */
function processingButtonClick() {
    const cardButtonsID = document.querySelectorAll('button[data-productId]');
    cardButtonsID.forEach(function (button) {
        button.addEventListener("click", function (event) {
            const productId = event.currentTarget.getAttribute('data-productId');
            addProductIntoBasket(productId);
        })
    })
}

insertProductsIntoPage(products, featuredItemsEl);
processingButtonClick();