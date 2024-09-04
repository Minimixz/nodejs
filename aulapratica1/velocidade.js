// Função para converter km/h para m/s
function converterVelocidades(velocidadesKmHArray) {
    velocidadesKmHArray.forEach(velocidadeKmH => {
        const velocidadeMs = velocidadeKmH / 3.6;
        console.log(`${velocidadeKmH} km/h é igual a ${velocidadeMs.toFixed(2)} m/s.`);
    });
}


const velocidadesKmHArray = [50, 80, 100, 120]; // Você pode adicionar mais valores ao array
converterVelocidades(velocidadesKmHArray);
