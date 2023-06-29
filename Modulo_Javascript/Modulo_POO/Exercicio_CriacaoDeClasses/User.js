//USER
class User {
    constructor(fullname, email ,password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(emailLogin, passwordLogin) {
        if (emailLogin == this.email &&  passwordLogin == this.password) {
            console.log("Login Concluído com Sucesso!")
        } else {
            console.log("E-mail ou senha incorreta!")
        }
    }
}
const gustavo = new User("Gustavo Rodrigues", "gustavorcprofissional", "021204")
console.log(gustavo)
gustavo.login("gustavorcprofissional", "021204")
gustavo.login("gustavorcprofissional", "02")
