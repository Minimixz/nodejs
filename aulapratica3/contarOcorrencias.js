function contarOcorrencias(lista, elemento) {
  let contador = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      contador++;
    }
  }
  return contador;
}

// Exemplo de uso:
const minhaLista = [1, 2, 3, 2, 4, 2];
const elementoProcurado = 2;
const ocorrencias = contarOcorrencias(minhaLista, elementoProcurado);
console.log(`O elemento ${elementoProcurado} aparece ${ocorrencias} vezes.`);