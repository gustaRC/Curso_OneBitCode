const dayjs = require("dayjs")

function aniver(data) {
    const aniver = dayjs(data)
    const hj = dayjs()

    const idade = hj.diff(aniver, "year")
    const proximoAniver = aniver.add(idade + 1, "year")
    const diasProximoAniver = proximoAniver.diff(hj, "day") + 1

    console.log(
        `Data nascimento (YYYY-MM-DD): ${aniver.format("YYYY-MM-DD")}, Idade: ${idade} anos;
Proximo Aniversário (DD-MM-YYYY): ${proximoAniver.format("DD-MM-YYYY")}
Quantos dias faltam pro seu aniversário: ${diasProximoAniver}`
    )
}

//YYYY-MM-DD
aniver("2004-12-02")