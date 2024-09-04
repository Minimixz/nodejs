// Função para converter Celsius para Fahrenheit
function converterCelsiusParaFahrenheit(temperaturasCelsius) {
    temperaturasCelsius.forEach(celsius => {
        const fahrenheit = (celsius * 9/5) + 32;
        console.log(`${celsius}°C é igual a ${fahrenheit.toFixed(1)}°F.`);
    });
}

// Temperaturas fornecidas
const temperaturasCelsius = [-10, 0, 20, 50];
converterCelsiusParaFahrenheit(temperaturasCelsius);
