export class Product {
    constructor(name, description, price, inStock = 0) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = inStock;
    }

    addStock(qtde) {
        this.inStock += qtde
    }

    removeStock(qtde) {
        this.inStock -= qtde
    }
}