//Função de entrada
var media, n1, n2, n3;

n1 = (8.5);
n2 = (4);
n3 = (4);

media = (n1 + n2 + n3) / 3;


//Media Aprovada
if (media >= 6) {
    console.log("Aprovado");
} else if (media <= 5) {
    console.log("Reprovado");
} else {
    console.log("Recuperação");
}
