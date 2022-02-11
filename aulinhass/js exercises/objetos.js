// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var allife = {
  nome: 'Allife',
  sobrenome: 'Teixeira',
  idade: 16,
};
console.log(allife.nome, allife.idade)

// Crie um método no objeto anterior, que mostre o seu nome completo
allife.nomeCompleto = `${allife.nome} ${allife.sobrenome}`;

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var labrador = {
 idade: 10,
 cor: 'preto',
 observacoes: 'ele sempre late quando ve um homem',
 latir(pessoa){
    if (pessoa=='homem'){
      return 'late'
    }
    else{
      return 'não late'
    }
 }
};

// nomeie 3 propriedades ou métodos de strings
var stringg='strinnnng';
stringg.indexOf();
stringg.charAt();
stringg.length;
console.log(stringg.length);

// nomeie 5 propriedades ou métodos de elementos do DOM
function qry(){
  console.log(document.querySelector(".card-text")
  );}

//imagem.addEventListener;
//imagem.accessKey;
//imagem.after
//imagem.outerHTML
//imagem.id
console.log(document.querySelector(".card-text")
);

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

