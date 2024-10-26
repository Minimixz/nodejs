class Retangulo {
    constructor(largura, altura) {
      this.largura = largura
      this.altura = altura
    }
  
    calcularArea() {
      return this.largura * this.altura
    }
  
    calcularPerimetro() {
      return 2 * (this.largura + this.altura)
    }
  }
  
  const retangulo = new Retangulo(5, 3)
  console.log("Área:", retangulo.calcularArea())
  console.log("Perímetro:", retangulo.calcularPerimetro())