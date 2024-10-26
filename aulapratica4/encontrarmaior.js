function encontrarMaior(numeros) {
    return Math.max(...numeros)
  }
  
  const numeros = [10, 5, 8, 20, 15]
  const maiorNumero = encontrarMaior(numeros)
  console.log("O maior número é:", maiorNumero)