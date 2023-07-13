//funcionará como um banco de dados
export class Database {
    //objeto storage oculto armazenando todos os dados das classes
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    //encontrar algum item, como o item oculto não pode ser acessado, precisa de um metodo para mostra-lo
    find(key) {
        return this.#storage[key]
    }

    //salvar author
    saveAuthor(author) {
        this.#storage.authors.push(author)
    }

    findBookByName(bookName) {
        return this.#storage.books.find(b => b.name === bookName)
    }

    //salvar livro SE ele não existir no storage
    saveBook(book) {
        const bookExists = findBookByName(book)
        if (!bookExists) {
            this.#storage.books.push(book)
        }
    }

    //se o livro ja existir porem precisa adicionar mais ao estoque
    addBookToStock(bookName, qtde) {
        const book = findBookByName(bookName)
        book?.addStock(qtde)
    }

    //remover do estoque
    removeBookToStock(bookName, qtde) {
        const book = findBookByName(bookName)
        book?.removeStock(qtde)
    }

    //POSTERS
    findPosterByName(bookName) {
        return this.#storage.posters.find(b => b.name === bookName)
    }

    //salvar livro SE ele não existir no storage
    savePoster(poster) {
        const posterExists = findPosterByName(poster)
        if (!posterExists) {
            this.#storage.posters.push(poster)
        }
    }

    //se o livro ja existir porem precisa adicionar mais ao estoque
    addBookToStock(posterName, qtde) {
        const poster = findPosterByName(posterName)
        poster?.addStock(qtde)
    }

    //remover do estoque
    removePosterToStock(posterName, qtde) {
        const poster = findPosterByName(posterName)
        poster?.removeStock(qtde)
    }

    //USER
    saveUser(user) {
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if(!userExistsr) {
            this.#storage.users.push(user)
        }
    }

    saveOrder(order) {
        this.#storage.orders.push(order)
    }

    showStorage() {
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))
    }
}