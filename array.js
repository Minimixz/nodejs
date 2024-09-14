
let num = []
let pares = []
let impares = []
let i;

for (i = 1; i <= 100; i++) {
    num.push(i)
}
for (i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        pares.push(num[i]);
    } else {
        impares.push(num[i]);
    }
}

console.log('Números pares:', pares);
console.log('Números ímpares:', impares);