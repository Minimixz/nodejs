function contarPositivosNegativos(numeros) {
  let positivos = 0;
  let negativos = 0;

  numeros.forEach(numero => {
    if (numero > 0) {
      positivos++;
    } else if (numero < 0) {
      negativos++;
    }
  });

  return { positivos, negativos };
}

// Exemplo de uso:
const minhaLista = [-4, 3, -9, 0, 4, 1];
const resultado = contarPositivosNegativos(minhaLista);

console.log("Positivos:", resultado.positivos);
console.log("Negativos:", resultado.negativos);