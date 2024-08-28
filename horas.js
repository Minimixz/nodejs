// Função para converter horas em minutos e segundos
function converterHoras(horasArray) {
    horasArray.forEach(horas => {
        const minutos = horas * 60;
        const segundos = horas * 3600;
        console.log(`${horas} horas é igual a ${minutos} minutos ou ${segundos} segundos.`);
    });
}


const horasArray = [1, 2, 3.5, 4]; // Você pode adicionar mais valores ao array
converterHoras(horasArray);
