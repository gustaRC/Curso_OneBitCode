export function excluirSpan(bt) {
  const divButton = bt.parentElement;
  const spanTransacoes = divButton.parentElement;
  console.log(spanTransacoes);
  const painelTransacoes = spanTransacoes.parentElement;
  painelTransacoes.removeChild(spanTransacoes);
}

export function excluirTransacao() {
  const bExcluir = document.querySelectorAll(".excluir");
  console.log(bExcluir);

  bExcluir.forEach((el) => {
    el.addEventListener("click", async () => {
      excluirSpan(el);

      const response = await fetch(
        "http://localhost:3000/transacoes/" + el.dataset.num,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    });
  });
}
