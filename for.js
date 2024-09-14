let t1 = 0;
let t2 = 1;
let t3 = t1+t2
let i

console.log(t1); 
console.log(t2); 


for (i=1;i<=15;i++) { 
    console.log(t3);
    t1 = t2;
    t2 = t3;
    t3 = t1+t2
}