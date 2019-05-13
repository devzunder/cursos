/*3º exercício
A partir do resultado do exemplo anterior adicione um indicador de 
carregamento em tela no lugar
da lista apenas enquanto a requisição estiver acontecendo:
<li>Carregando...</li>
Além disso, adicione uma mensagem de erro em tela caso o usuário no Github 
não exista.
Dica: Quando o usuário não existe, a requisição irá cair no 
.catch com código de erro 404. */
var btnElement = document.querySelector("button");
var inputElement = document.querySelector("input");
var listElement = document.querySelector("ul");

var repos = [];

var listRepo = () => {
  console.log(repos);
  listElement.innerHTML = "";
  for (repo of repos) {
    var item = document.createElement("li");
    var name = document.createTextNode(repo.name);
    console.log(item);
    item.appendChild(name);
    listElement.appendChild(item);
  }
};

var search = () => {
  var user = inputElement.value;
  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(function(data) {
      repos = data.data;
      inputElement.value = "";
      listRepo();
    })
    .catch(function(error) {
      console.warn(error);
      inputElement.value = "";
      listRepo();
    });
};

btnElement.onclick = () => search();
