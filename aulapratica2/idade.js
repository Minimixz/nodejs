var idade = 25;
var classificacao;

if (idade >= 0 && idade <= 12) {
    classificacao = "Criança";
} else if (idade >= 13 && idade <= 17) {
    classificacao = "Adolescente";
} else if (idade >= 18 && idade <= 64) {
    classificacao = "Adulto";
} else if (idade >= 65) {
    classificacao = "Idoso";
} else {
    classificacao = "Idade inválida";
}

console.log("Categoria: " + classificacao); 