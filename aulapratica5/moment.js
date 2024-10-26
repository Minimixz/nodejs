const moment = require('moment');

// Obtendo a data atual
const agora = moment()
console.log('Data atual:', agora.format('MM-DD-YYYY'))

// Adicionando 7 dias
const seteDiasDepois = agora.clone().add(7, 'days')
console.log('Data após 7 dias:', seteDiasDepois.format('MM-DD-YYYY'))

// Subtraindo 5 dias
const cincoDiasAntes = agora.clone().subtract(5, 'days')
console.log('Data há 5 dias:', cincoDiasAntes.format('MM-DD-YYYY'))

// Adicionando 3 meses
const tresMesesDepois = agora.clone().add(3, 'months')
console.log('Data após 3 meses:', tresMesesDepois.format('MM-DD-YYYY'))

// Subtraindo 2 anos
const doisAnosAntes = agora.clone().subtract(2, 'years')
console.log('Data há 2 anos:', doisAnosAntes.format('MM-DD-YYYY'))

// Diferença entre duas datas
const data1 = moment('2023-11-24')
const data2 = moment('2024-02-15')

// Diferença em dias
const diferencaEmDias = data2.diff(data1, 'days')
console.log('Diferença em dias:', diferencaEmDias)

// Diferença em meses
const diferencaEmMeses = data2.diff(data1, 'months')
console.log('Diferença em meses:', diferencaEmMeses)

// Diferença em anos
const diferencaEmAnos = data2.diff(data1, 'years')
console.log('Diferença em anos:', diferencaEmAnos)
