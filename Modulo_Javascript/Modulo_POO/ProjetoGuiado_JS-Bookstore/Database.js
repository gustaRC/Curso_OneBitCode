export class Database {
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key) {
        return this.#storage[key]
    }

    saveAuthor(author) {
        this.#storage.authors.push(author)
    }

    saveBook(book) {
        const bookExists = this.#storage.books.find(b => b.name === book.name)
        if (!bookExists) {
            this.#storage.books.push(book)
        }
    }

    addBookToStock(bookName, qtde) {
        const book = this.#storage.books.find(b => b.name === bookName)
    }


}