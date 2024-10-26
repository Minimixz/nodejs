// Criando uma nova turma
const minhaTurma = new Turma('Programação')

// Criando alguns alunos
const aluno1 = { nome: 'João' }
const aluno2 = { nome: 'Maria' }
const aluno3 = { nome: 'Pedro' }

// Adicionando os alunos à turma
minhaTurma.adicionarAluno(aluno1)
minhaTurma.adicionarAluno(aluno2)
minhaTurma.adicionarAluno(aluno3)

// Listando os alunos da turma
minhaTurma.listarAlunos()

class Turma {
    constructor(nome) {
      this.nome = nome
      this.alunos = []
    }
  
    adicionarAluno(aluno) {
      this.alunos.push(aluno)
    }
  
    listarAlunos() {
      console.log(`Alunos da turma ${this.nome}:`)
      this.alunos.forEach(aluno => console.log(aluno.nome))
    }
  }