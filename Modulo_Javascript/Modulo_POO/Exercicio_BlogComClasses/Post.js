const Comment = require("./Comment.js")


class Post {
    constructor(...com) {
        this.comments = new Comment(com)
    }
}

const teste = new Post("teste", "teste", "teste")
console.log(teste.comments)
teste.addComment("teste", "teste")
