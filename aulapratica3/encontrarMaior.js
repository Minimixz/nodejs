function encontrarMaior(numeros) {
  let maior = numeros[0]; // Assume o primeiro número como o maior

  for (let numero of numeros) {
    if (numero > maior) {
      maior = numero;
    }
  }

  return maior;
}

// Exemplo de uso:
const minhaLista = [3, 7, 2, 9, 5];
const maiorNumero = encontrarMaior(minhaLista);
console.log("O maior número é:", maiorNumero);