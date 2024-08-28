// Função para obter o último dígito de um número
function obterUltimoDigito(numerosArray) {
    numerosArray.forEach(numero => {
        const ultimoDigito = numero % 10;
        console.log(`O último dígito de ${numero} é ${ultimoDigito}.`);
    });
}


const numerosArray = [12345, 67890, 24680, 13579]; // Você pode adicionar mais valores ao array
obterUltimoDigito(numerosArray);
