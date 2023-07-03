const Author = require("./Author");

const gustavo = new Author("Gustavo Rodrigues")

const post = gustavo.writePost("Titulo", "conteudo")

post.addComment("Fulano", "Vdd")
post.addComment("Sicrano", "Top")

console.log(gustavo)
console.log(post)