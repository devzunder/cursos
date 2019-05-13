const arr = [1, 2, 3, 4, 6, 7, 8, 9];

const newArr = arr.map(function(item, index) {
  return item + idex;
});

const newArr2 = arr.map((item, index) => item * index);

const sum = arr.reduce(function(total, next) {
  return total + next;
});

const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

const find = arr.find(function(item) {
  return item === 4;
});

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false }
];

console.log(
  produtos.filter(function(p) {
    return false;
  })
);

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
];

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);

const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true }
];

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));
