// Função para converter dias em horas, minutos e segundos
function converterTempo(diasArray) {
    diasArray.forEach(dias => {
        const horas = dias * 24;
        const minutos = horas * 60;
        const segundos = minutos * 60;
        console.log(`${dias} dias é igual a ${horas} horas, ${minutos} minutos ou ${segundos} segundos.`);
    });
}


const diasArray = [1, 2.5, 3, 7]; // Você pode adicionar mais valores ao array
converterTempo(diasArray);
