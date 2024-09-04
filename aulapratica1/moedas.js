// Função para converter BRL para USD
function converterBRLparaUSD(valorBRL) {
    const taxaDeCambio = 5; // 1 USD = 5 BRL
    const valorUSD = valorBRL / taxaDeCambio;
    return valorUSD;
}

// Lista de valores em BRL a serem convertidos
const valoresEmBRL = [50, 100, 150, 200, 250]; // Você pode adicionar mais valores a esta lista

// Realiza a conversão para cada valor na lista
const valoresEmUSD = valoresEmBRL.map(valor => converterBRLparaUSD(valor));

// Imprime os valores convertidos no console
valoresEmBRL.forEach((valor, index) => {
    console.log(`O valor de R$${valor} em dólares é $${valoresEmUSD[index].toFixed(2)}`);
});
