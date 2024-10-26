class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular
    this.saldo = saldo
  }

  depositar(valor) {
    this.saldo += valor
    console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`)
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente.")
    } else {
      this.saldo -= valor
      console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`)
    }
  }
}

// Criando uma instância da classe
const minhaConta = new ContaBancaria("Anderson", 1000)

// Realizando um depósito
minhaConta.depositar(500)

// Realizando um saque
minhaConta.sacar(200)