function somaPares(n) {
  let soma = 0;
  let i = 2; // Iniciamos em 2, pois é o primeiro número par

  while (i <= n) {
    soma += i;
    i += 2;
  }

  return soma;
}

// Exemplo de uso:
const resultado = somaPares(10);
console.log("A soma dos números pares de 1 até 10 é:", resultado);