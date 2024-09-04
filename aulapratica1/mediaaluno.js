// primeira nota e segunda nota 
var n1 = 5
var n2 = 9

var media = (n1+n2)/2

if (media >=6){
    console.log ('Nota: ',media, '\n Aprovado')
}
else if (media >=3 && media <6){
    console.log ('Nota: ',media, ' \nRecuperação')
}
else {
    console.log('Nota', media, '\nReprovado')
}