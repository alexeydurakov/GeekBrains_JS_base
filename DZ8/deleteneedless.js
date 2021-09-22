'use strict';

/**
 *  Эта функция удаляет из файла index.html, ненужные данные о товарах
 */
function deleteNeedlessProducts() {
    let elem = document.querySelectorAll('.featuredItem');
    for (var i = 0; i < elem.length; i++) {
        elem[i].remove();
    }
}

deleteNeedlessProducts();