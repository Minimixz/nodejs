//variavel aulas
var totalaulas = 20;
var aulasparticipadas = 15;

var porcentagem_presenca = (aulasparticipadas / totalaulas) * 100;
var nota;

if (porcentagem_presenca == 100) {
    nota = 10;
} else if (porcentagem_presenca > 75) {
    nota = 8;
} else if (porcentagem_presenca > 50) {
    nota = 6;
} else {
    nota = 0;
}

console.log("A nota do aluno é:", nota);