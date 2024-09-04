// Função para converter metros para centímetros
function converterParaCentimetros(metros) {
    return metros * 100;
}

// Função para converter metros para milímetros
function converterParaMilimetros(metros) {
    return metros * 1000;
}


const metros = 1.5; // Valor em metros

const centimetros = converterParaCentimetros(metros);
const milimetros = converterParaMilimetros(metros);

console.log(`${metros} metros é igual a ${metros} metros.`);
console.log(`${metros} metros é igual a ${centimetros} centímetros.`);
console.log(`${metros} metros é igual a ${milimetros} milímetros.`);
