// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total) // total=35
// Crie duas expressões que retornem NaN
var nan1='30 horas',
    nan2=+'80 segundos';
console.log(+nan1 + 30, nan2 + 32)

// Somar a string '200' com o número 50 e retornar 250
var string200=+'200';
console.log(string200+50)

// Incremente o número 5 e retorne o seu valor incrementado
var numero5=5
console.log(++numero5)
// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = numero / 2; // NaN (Not a Number)
 console.log(pesoPorDois)