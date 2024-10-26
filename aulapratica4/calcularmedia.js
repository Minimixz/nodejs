function calcularMedia(numeros) {
    const soma = numeros.reduce((total, numero) => total + numero, 0)
    return soma / numeros.length
  }
  
  const numeros = [1, 2, 3, 4, 5]
  const media = calcularMedia(numeros)
  console.log("A média é:", media)