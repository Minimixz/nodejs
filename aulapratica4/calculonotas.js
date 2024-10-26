class Aluno {
    constructor(nome, notas) {
      this.nome = nome
      this.notas = notas
    }
  
    calcularMedia() {
      const soma = this.notas.reduce((total, nota) => total + nota, 0)
      return soma / this.notas.length
    }
  }
  
  const aluno = new Aluno("Maria", [8, 7, 9])
  console.log("Média:", aluno.calcularMedia())