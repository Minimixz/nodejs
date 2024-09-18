function fatorial(n) {
  let resultado = 1;

  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}

// Exemplo de uso:
const numero = 5;
const fatorialDoNumero = fatorial(numero);
console.log(`O fatorial de ${numero} é ${fatorialDoNumero}`);