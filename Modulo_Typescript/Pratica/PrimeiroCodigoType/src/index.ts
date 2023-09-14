function enviarEspaço(nome: string, capitao: string) {
  const espaconave = {
    nome: nome,
    capitao: capitao,
    velocidade: 0,
    emMissao: true,
    tripulacao: []
    
  }

  alert(`A nave ${espaconave.nome} comandada pelo capitão ${espaconave.capitao} foi enviada em uma missão!`)
  
  return espaconave
}

function acelerar(velocidadeD: number, espaconave: { nome: string, velocidade: number}) {
  if (espaconave.velocidade > velocidadeD) {
    alert(`Reduzindo a velocidade da ${espaconave.nome} para ${velocidadeD}...`)
  } else if (espaconave.velocidade < velocidadeD) {
    alert(`Aumentando a velocidade da ${espaconave.nome} para ${velocidadeD}...`)
  } else {
    alert(`Mantendo a velocidade da ${espaconave.nome}...`)
  }
}

const nomeEspaconave = prompt("Insira o nome da nave a ser enviada.")
const capitaoEspaconave = prompt("Insira o nome do capitão da nave.")

const naveAtual = enviarEspaço(nomeEspaconave, capitaoEspaconave)

function veloc() {
  const vel = Number(prompt("Insira a velocidade para a qual deseja adicionar."))
  return vel
}

acelerar(veloc(), naveAtual)

let teste: string[]

teste = ["a1", "a2"]

let [x1, x2] = teste
console.log(`x1: ${x1}`)
console.log(`x2: ${x2}`)