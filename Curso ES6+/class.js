class List {
  constructor() {
    this.data = [];
  }
  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}
// se eu quiser esconder um método uso static
class TodoList extends List {
  constructor() {
    super();

    this.usuario = "Diego";
  }
  MostraUsuario() {
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList();

document.getElementById("novoTodo").onclick = function() {
  MinhaLista.add("novo Todo");
};

class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(soma(2, 1));
