const readline = require('readline');

// Cria uma interface para entrada e saída padrão
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para ler a entrada do usuário e verificar o acesso
function verificarAcesso() {
    rl.question("Ano de nascimento: ", (anoNascimento) => {
        rl.question("Conta ativa (Sim/Não): ", (contaAtiva) => {
            rl.question("Restrição de crédito (Sim/Não): ", (restricaoCredito) => {
                rl.question("Sistema em manutenção (Sim/Não): ", (sistemaManutencao) => {
                    // Obtém o ano atual
                    const anoAtual = new Date().getFullYear();
                    // Calcula a idade
                    const idade = anoAtual - parseInt(anoNascimento);
                    
                    // Verifica se todas as condições são atendidas
                    const idadeAdequada = idade >= 18;
                    const contaEstaAtiva = contaAtiva.toLowerCase() === 'sim';
                    const creditoSemRestricao = restricaoCredito.toLowerCase() === 'não';
                    const sistemaNaoEmManutencao = sistemaManutencao.toLowerCase() === 'não';

                    if (idadeAdequada && contaEstaAtiva && creditoSemRestricao && sistemaNaoEmManutencao) {
                        console.log("Acesso concedido");
                    } else {
                        console.log("Acesso negado");
                    }

                    // Fecha a interface
                    rl.close();
                });
            });
        });
    });
}

// Executa a função de verificação de acesso
verificarAcesso();
