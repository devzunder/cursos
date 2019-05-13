/*2º exercício
Crie uma tela com um <input> que deve receber o nome de um usuário no Github.
Após digitar o nome do usuário e clicar no botão buscar a 
aplicação deve buscar pela API do Github (conformeURL abaixo) os dados de
repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.
<input type="text" name="user">
<button onclick="">Adicionar</button>
Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
 <li>repo4</li>
 <li>repo5</li>
</ul> */
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
