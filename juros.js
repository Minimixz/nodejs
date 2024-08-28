// Função para calcular juros simples
function calcularJurosSimples(valores) {
    valores.forEach(valor => {
        const { principal, taxa, tempo } = valor;
        const juros = principal * (taxa / 100) * tempo;
        console.log(`Para um principal de R$ ${principal}, com uma taxa de ${taxa}% ao ano, em ${tempo} anos, os juros simples são R$ ${juros.toFixed(2)}.`);
    });
}


const valores = [
    { principal: 1000, taxa: 5, tempo: 2 },
    { principal: 1500, taxa: 3.5, tempo: 3 },
    { principal: 2000, taxa: 4, tempo: 1.5 },
    { principal: 2500, taxa: 6, tempo: 4 }
];

calcularJurosSimples(valores);
