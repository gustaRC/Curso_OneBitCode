import { Database } from "./Database";
import { Author } from "./entities/Author";
import { Book } from "./entities/Book";
import { Order } from "./entities/Order";
import { Poster } from "./entities/Poster";
import { User } from "./entities/User";

export class App {
    static #database = new Database()

    createUser(name, email, password) {
        const user = new User
        App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find("users")
    }

    createAuthor(name, nacionality, bio) {
        const author = new Author(name, nacionality, bio)
        App.#database.saveAuthor(author)    
    }

    getAuthor() {
        return App.#database.find("authors")
    }

    createBooks(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    addBook(bookName, qtde) {
        App.#database.addBookToStock(bookName, qtde)
    }

    getBooks() {
        return App.#database.find("books")
    }
    
    createPoster(name, description, height, width, price, inStock) {
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#database.savePoster(poster)
    }

    addPoster(posterName, qtde) {
        App.#database.addBookToStock(posterName, qtde)
    }

    getPosters() {
        return App.#database.find("posters")
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({product, qtde}) => {
            if (product instanceof Book) {
                App.#database.removeBookToStock(product.name, qtde)
            } else if (product instanceof Poster) {
                App.#database.removePosterToStock(product.name, qtde)
            }
        })
    }

    getOrders() {
        return App.#database.find("orders")
    }

    showDatabase() {
        App.#database.showStorage()
    }
}