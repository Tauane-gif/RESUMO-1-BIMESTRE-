/*10 pontos
6 - Leia 10 números inteiros e informe, ao final:
 A quantidade de números pares digitados e quais foram eles;
 A quantidade de números ímpares digitados e quais foram eles.
Nome aluno: Tauane V.S.Souza 
*/

let  teclado = require('prompt-sync')();
let  contador = 1;
let  pares = 0;
let impares = 0;
while (contador <= 10) {
    var numero = parseInt(teclado("Digite o ".concat(contador, "\u00BA n\u00FAmero inteiro: ")));
    if (numero % 2 === 0) {
        pares++;
    }
    else {
        impares++;
    }
    contador++;
}
console.log("Quantidade de n\u00FAmeros pares: ".concat(pares));
console.log("Quantidade de n\u00FAmeros \u00EDmpares: ".concat(impares));