//PRODUCT
class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(add) {
        this.inStock += add
    }

    calculateDiscount(discount) {
        const desc = (this.price * discount / 100) - this.price
        console.log(`Desconto de ${discount}% = ${Math.abs(desc)}`)
    }
}

const tomate = new Product("tomate", "fruta vermelha", 80)
console.log(tomate)
tomate.addToStock(5)
console.log(`Add stock: ${tomate}`)
tomate.calculateDiscount(20)