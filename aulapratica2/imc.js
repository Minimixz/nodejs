const readline = require('readline');

// Cria uma interface para entrada e saída padrão
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para ler a entrada do usuário e calcular o IMC
rl.question("Digite seu peso (kg): ", (peso) => {
    rl.question("Digite sua altura (m): ", (altura) => {
        // Converte as entradas para números
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        // Calcula o IMC
        const imc = pesoNum / (alturaNum * alturaNum);

        // Classifica o IMC
        let classificacao;
        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 25) {
            classificacao = "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            classificacao = "Sobrepeso";
        } else {
            classificacao = "Obesidade";
        }

        // Exibe o resultado
        console.log(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`);

        // Fecha a interface
        rl.close();
    });
});
