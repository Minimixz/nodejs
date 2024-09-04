var preço = 250;
var categoria = 3; 

var desconto;

switch (categoria) {
    case 1:
        desconto = 10;
        break;
    case 2:
        desconto = 20;
        break;
    case 3:
        desconto = 30;
        break;
    case 4:
        desconto = 40;
        break;
    default:
        desconto = 0;
        break;
}

var valorDesconto = (preço * desconto) / 100;
var preçoComDesconto = preço - valorDesconto;

console.log("Preço original: R$" + preço);
console.log("Desconto aplicado: " + desconto + "%");
console.log("Preço com desconto: R$" + preçoComDesconto.toFixed(2));