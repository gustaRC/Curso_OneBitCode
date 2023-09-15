//ARRAY GLOBAL PLANESTAS CADASTRADOS
let arrayPlanetas = []

//Type Aliases | Definir situação
type Situacao = "habitado" | "habitável" | "inabitável" | "inexplorado"

//CRIAR PLANETA
function novoPlaneta(
  nome: string,
  coordenadas: [number, number, number, number],
  situacao: Situacao,
  satelites: string[]) {
  let planeta = {
    nome,
    coordenadas,
    situacao,
    satelites
  }

  let txtSatelites = ""
  satelites.forEach(s => {
    txtSatelites += ` ${s},`
  })

  let nomePlanetas = []
  arrayPlanetas.forEach(el => nomePlanetas.push(el.nome))


  if (nomePlanetas.find(n => n === planeta.nome)) {
    alert(`Não foi possivel cadastrar o planeta! Nome ja existente.`)
  } else {
    alert(`${nome} foi cadastrado com sucesso!
    Coordenadas: ${coordenadas[0]}, ${coordenadas[1]}, ${coordenadas[2]}, ${coordenadas[3]};
    Situação: ${situacao};
    Satelites: ${txtSatelites}`)
    arrayPlanetas.push(planeta)
  }
}

//ENCONTRAR PLANETA PELO NOME
function encontrarPlaneta(nomePlaneta: string) {
  let planeta: {
    nome: string,
    coordenadas: [number, number, number, number],
    situacao: Situacao,
    satelites: string[]
  }

  planeta = arrayPlanetas.find(el => el.nome === nomePlaneta)

  return planeta
}

//ALTERAR SITUAÇÃO DO PLANETA
function alterarSituacao(situacao: Situacao, planeta: {nome: string, situacao: Situacao}) {
  if (situacao === planeta.situacao) {
    alert(`Está situação (${situacao}) já está definida! Selecione outra!`)
  } else {
    alert(`Situação do planeta ${planeta.nome} alterada com sucesso! De "${planeta.situacao}" para "${situacao}"`)
    planeta.situacao = situacao
  }
}

//ADICIONAR SATELITE
function addSatelite(nomeSatelite: string, planeta: {nome: string, satelites: string[]}) {
  planeta.satelites.push(nomeSatelite)
  alert(`Foi adicionado o satelite ${nomeSatelite} ao planeta ${planeta.nome}`)
}

//REMOVER SATELITE
function removeSatelite(nomeSatelite: string ,planeta: {nome: string, satelites: string[]}) {
  let index = planeta.satelites.indexOf(nomeSatelite)
  if (index > -1) {
    alert(`Foi removido o satelite ${nomeSatelite} do planeta ${planeta.nome}`)
    planeta.satelites.slice(index, 1)
  } else {
    alert(`Satelite ${nomeSatelite} não encontrado no planeta ${planeta.nome}`)
  }
}

//LISTAR TDS OS PLANETAS CADASTRADOS
function listarPlanetas() {
  let txtPlanetas = ''

  arrayPlanetas.forEach(el => {
    let txtSatelites = ""
    el.satelites.forEach(s => {
      txtSatelites += ` - ${s}`
    })

    txtPlanetas += `
    Nome: ${el.nome}
    Coordenadas: ${el.coordenadas[0]}, ${el.coordenadas[1]}, ${el.coordenadas[2]}, ${el.coordenadas[3]};
    Situação: ${el.situacao};
    Satelites: ${txtSatelites}.
    ---------------------------
    `
  })
  alert(`Planetas cadastrados:
  ${txtPlanetas}
  `)
}

//MENU 1 - CRIAR PLANETA
function menu1_NovoPlaneta() {
  let objPlaneta: {
    nome: string,
    coordenadas: [number, number, number, number],
    situacao: Situacao,
    satelites: string[]
  }

  
  objPlaneta.nome = prompt(`Qual o nome do planeta?`)

  objPlaneta.coordenadas[0] = Number(prompt(`Qual a coordenada 1? [X, 0, 0, 0]`))
  objPlaneta.coordenadas[1] = Number(prompt(`Qual a coordenada 2? [${objPlaneta.coordenadas[0]}, X, 0, 0]`))
  objPlaneta.coordenadas[2] = Number(prompt(`Qual a coordenada 3? [${objPlaneta.coordenadas[0]}, ${objPlaneta.coordenadas[1]}, X, 0]`))
  objPlaneta.coordenadas[3] = Number(prompt(`Qual a coordenada 4? [${objPlaneta.coordenadas[0]}, ${objPlaneta.coordenadas[1]}, ${objPlaneta.coordenadas[2]}, X]`))
  
  let situacaoPlaneta = prompt(`Qual a situação do planeta?
  1 - Habitado
  2 - Habitável
  3 - Inabitável
  4 - Inexplorado`)

  switch (situacaoPlaneta) {
    case "1":
      objPlaneta.situacao = "habitado"
      break
    case "2":
      objPlaneta.situacao = "habitável" 
      break
    case "3":
      objPlaneta.situacao = "inabitável"
      break
    case "2":
      objPlaneta.situacao = "inexplorado"
      break
    default:
      alert("Opção invalida!")
  }


  let confirmSatelite = confirm(`Deseja adicionar satelites ao planeta?`)

  while (confirmSatelite) {
    let sateliteAdd = prompt(`Qual o nome do satelite a ser adicionado?`)
    objPlaneta.satelites.push(sateliteAdd)

    confirmSatelite = confirm(`Deseja adicionar satelites ao planeta?`)
  }

  let txtSatelites = ""
  objPlaneta.satelites.forEach(s => {
    txtSatelites += ` ${s},`
  })

  let cadastroConfirm = confirm(`Deseja confirmar o cadastro de um novo planeta?
   - Nome: ${objPlaneta.nome};
   - Coordenadas: ${objPlaneta.coordenadas[0]}, ${objPlaneta.coordenadas[1]}, ${objPlaneta.coordenadas[2]}, ${objPlaneta.coordenadas[3]};
   - Situação: ${objPlaneta.situacao};
   - Satelites: ${txtSatelites}`)

  if (cadastroConfirm) {
    novoPlaneta(objPlaneta.nome, objPlaneta.coordenadas, objPlaneta.situacao, objPlaneta.satelites)
  }
}

//MENU 2 - ALTERAR SITUACAO
function menu2_AlterarSituacao() {
  
}