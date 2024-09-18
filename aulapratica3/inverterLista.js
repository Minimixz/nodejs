function inverterLista(lista) {
  const novaLista = [];
  for (let i = lista.length - 1; i >= 0; i--) {
    novaLista.push(lista[i]);
  }
  return novaLista;
}

// Exemplo de uso:
const minhaLista = [1, 2, 3, 4, 5];
const listaInvertida = inverterLista(minhaLista);
console.log(listaInvertida); // Saída: [5, 4, 3, 2, 1]