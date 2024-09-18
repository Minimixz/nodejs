function calcularMedia(numeros) {
  let soma = 0;
  let contador = 0;

  for (let numero of numeros) {
    soma += numero;
    contador++;
  }

  if (contador === 0) {
    return 0; // Retorna 0 se a lista estiver vazia
  }

  return soma / contador;
}

// Exemplo de uso:
const minhaLista = [1, 2, 3, 4, 5];
const media = calcularMedia(minhaLista);
console.log(`A média dos números é: ${media}`);