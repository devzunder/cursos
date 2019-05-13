//valores padrão

const soma = (a = 3, b = 6) => {
  return a + b;
};
// destructuring
const usuario = {
  nome: "Lucas",
  idade: "25",
  endereco: {
    cidade: "Florianopolis",
    estado: "Santa Catarina"
  }
};

const {
  nome,
  idade,
  endereco: { cidade, estado }
} = usuario;

console.log(cidade);
console.log(nome);

//Object short Syntax
var nome = "Lucas";
const idade = "25";
const usuario = {
  nome,
  idade,
  empresa: "teste"
};
