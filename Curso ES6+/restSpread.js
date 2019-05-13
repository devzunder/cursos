// Rest

const usuario = {
  nome: "Lucas",
  idade: "25",
  empresa: "Reverse"
};

const { nome, ...resto } = usuario;
console.log(nome); //nome
console.log(resto); //idade e empresa

const arr = [1, 2, 3, 4, 5, 6];

const [a, b, ...c] = arr;

function soma(a, b) {
  return a + b;
}
function soma2(...params) {
  return params.reduce((total, next) => total + next);
}
//função acima pode somar quantos números eu colocar

//SPREAD
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr, ...arr2];

const usuario = {
  nome: "Lucas",
  idade: "25",
  empresa: "BG"
};

const usuario2 = { ...usuario, nome: "Bruna" };
