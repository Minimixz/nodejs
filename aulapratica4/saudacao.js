class Pessoa {
    constructor(nome, idade) {
      this.nome = nome
      this.idade = idade
    }
  
    cumprimentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
  }
  
  const pessoa = new Pessoa("Anderson", 38)
  pessoa.cumprimentar()