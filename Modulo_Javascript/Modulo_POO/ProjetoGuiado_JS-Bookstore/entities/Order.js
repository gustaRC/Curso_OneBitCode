export class Order {
    #total
    #items
    #user

    constructor(items, user) {
        items.forEach(({product, qtde}) => {
            if (qtde > product.inStock) {
                throw new Error("Quandidade insuficiente em estoque!")
            }
        })
        this.#items = items
        this.#user = user
        this.#total = items.reduce((sum, {product, qtde}) => sum + (product.price * qtde), 0)
    }

    get data() {
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}