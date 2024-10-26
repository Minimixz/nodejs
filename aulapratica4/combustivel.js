function calcularMelhorCombustivel(precoAlcool, precoGasolina) {
    // Calcula a razão entre o preço do álcool e da gasolina
    const razao = precoAlcool / precoGasolina

    // Verifica se o álcool é mais vantajoso
    if (razao <= 0.7) {
      return "É mais vantajoso abastecer com Álcool."
    } else {
      return "É mais vantajoso abastecer com Gasolina."
    }
  }
  
  // Exemplo de uso:
  const precoAlcoolDigitado = 4.20
  const precoGasolinaDigitado = 6.00
  
  const resultado = calcularMelhorCombustivel(precoAlcoolDigitado, precoGasolinaDigitado)
  console.log(resultado)