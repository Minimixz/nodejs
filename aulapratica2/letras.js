var nota = 88; 
var notaLetra;

if (nota >= 90 && nota <= 100) {
    notaLetra = 'A';
} else if (nota >= 80 && nota < 90) {
    notaLetra = 'B';
} else if (nota >= 70 && nota < 80) {
    notaLetra = 'C';
} else if (nota >= 60 && nota < 70) {
    notaLetra = 'D';
} else if (nota >= 0 && nota < 60) {
    notaLetra = 'F';
} else {
    notaLetra = 'Nota inválida'; 
}

console.log("Nota em letra: " + notaLetra);
