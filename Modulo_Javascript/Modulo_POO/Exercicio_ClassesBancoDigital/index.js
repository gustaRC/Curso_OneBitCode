import { App } from "./App.js";

App.criarUsuario("gustavo@gmail.com", "Gustavo Rodrigues")
App.criarUsuario("gustavo@beltsistemas.com.br", "Gustavo Costa")

App.deposito("gustavo@gmail.com", 100)

App.transferencia("gustavo@gmail.com", "gustavo@beltsistemas.com.br", 20)

App.mudarTaxaJuros(10)
App.emprestimos("gustavo@beltsistemas.com.br", 5000, 24)

console.table(App.encontrarUsuario("gustavo@gmail.com"))
console.table(App.encontrarUsuario("gustavo@beltsistemas.com.br").conta)