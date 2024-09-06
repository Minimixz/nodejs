//variavel
var produto = 500;

// Calcular o desconto com base no preço
let desconto;
if (produto <= 100) {
    desconto = 5;
} else if (produto <= 500) {
    desconto = 10;
} else {
    desconto = 15;
}

// Calcular o valor do desconto e o preço final diretamente
const valorDesconto = (produto * desconto) / 100;
const precoFinal = produto - valorDesconto;

// Exibir o resultado
console.log("O valor do produto com desconto é:", precoFinal);