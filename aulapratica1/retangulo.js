// Função para calcular perímetro e área de um retângulo
function calcularPerimetroEArea(retangulos) {
    retangulos.forEach(retangulo => {
        const { largura, comprimento } = retangulo;
        const perimetro = 2 * (largura + comprimento);
        const area = largura * comprimento;
        console.log(`Para um retângulo de largura ${largura} e comprimento ${comprimento}:`);
        console.log(`Perímetro: ${perimetro}`);
        console.log(`Área: ${area}`);
        console.log('---');
    });
}


const retangulos = [
    { largura: 5, comprimento: 10 },
    { largura: 7, comprimento: 14 },
    { largura: 8, comprimento: 12 },
    { largura: 6, comprimento: 9 }
];

calcularPerimetroEArea(retangulos);
