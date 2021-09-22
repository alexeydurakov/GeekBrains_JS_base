'use strict'

/**
 * Класс описывает структуру объекта Products
 */
class ProductDTO {
    /**
     * @param {number} id уникальный номер продукта
     * @param {sting} image имя файла картинки товара
     * @param {string} name наименование товата
     * @param {string} description описание товара
     * @param {number} price цена товара
     */
    constructor(id, image, name, description, price) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.prise = price;
    }
}