// Crie uma função para verificar se um valor é Truthy
function verificarr(verificar){
  if (verificar){
    console.log('caracter valido');
  } else{
    console.log('caracter invalido');
  }
};
function validacao(valor){
  if (valor == 1){
    console.log('valor');
  } 
  else if(valor==2){
    console.log('2')
  }
  else{
    console.log('')
  }
};


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroTriangulo(ladoAB, ladoBC, ladoAC){
  if(perimetroTriangulo = Number){
    const perimetroTriangulo=ladoAB+ladoBC+ladoAC;
    return perimetroTriangulo;
} else{
  console.log('NaN');
}};

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
var nome='allife',
    sobrenome='teixeira';
function dados(dadosClient){
  if(dadosClient=='allife'){
    return nome+' '+sobrenome
  } else{}
};

// Crie uma função que verifica se um número é par
function numero(verifyNumero){
  if (verifyNumero % 2 == 0){
    console.log('numero par')
  } else{
    console.log('numero impar')    
  }
};

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(arg){
  return typeof arg;
};

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){ console.log(nome+' '+sobrenome)})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
