/*
2º exercício
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {
 // código aqui
}
pares(32, 321);
*/

function pares(x, y) {
  for (x; x <= y; x++) {
    if (x % 2 == 0) {
      console.log(x);
    }
  }
}

pares(32, 321);
