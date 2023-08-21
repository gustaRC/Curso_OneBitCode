export function criarSpan(transacoes) {
  const Pnome = document.createElement("p");
  Pnome.classList.add("nomeTransacoes");
  Pnome.textContent = transacoes.nome;
  Pnome.id = `nomeTransacao-${transacoes.id}`

  const h4 = document.createElement("h4");
  h4.textContent = "R$";

  const h3 = document.createElement("h3");
  h3.classList.add("valorTransacoes");
  //h3.textContent = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(transacoes.valor)
  h3.textContent = transacoes.valor;
  h3.id = `valorTransacao-${transacoes.id}`

  const div = document.createElement("div");
  div.append(h4, h3);

  const bEditar = document.createElement("button");
  bEditar.id = `bEditar-${transacoes.id}`;
  bEditar.setAttribute("data-num", transacoes.id);
  bEditar.classList.add("editar");
  bEditar.textContent = "Editar";

  const bExcluir = document.createElement("button");
  bExcluir.id = `bExcluir-${transacoes.id}`;
  bExcluir.setAttribute("data-num", transacoes.id);
  bExcluir.classList.add("excluir");
  bExcluir.textContent = "Excluir";

  const divB = document.createElement("div");
  divB.append(bEditar, bExcluir);

  const span = document.createElement("span");
  span.classList.add("span-transacoes");
  span.id = `spanID-${transacoes.id}`;

  span.append(Pnome, div, divB);
  document.querySelector("#painel-transacoes").appendChild(span);
}
