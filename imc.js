// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}


const peso = 104; // Peso em kg
const altura = 1.80; // Altura em metros

const imc = calcularIMC(peso, altura);
if (imc >= 40.0) {
    console.log("Obeso grau 3");
} else if (imc >= 35.0) {
    console.log("Obeso grau 2");
} else if (imc >= 30.0) {
    console.log("Obeso grau 1");
} else if (imc >= 25.0) {
    console.log("Sobrepeso");
} else {
    console.log("Peso normal");
}
console.log(`O IMC é: ${imc.toFixed(2)}`);
