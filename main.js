document.addEventListener("DOMContentLoaded", () => {

  const projetos = [
    {
      nome: "App de Pedidos",
      descricao: "Sistema de pedidos de comida e bebidas."
    },
    {
      nome: "Banco de Dados Catering",
      descricao: "Controle de eventos, clientes e custos."
    },
    {
      nome: "Escolinha de Futebol",
      descricao: "Projeto social esportivo."
    }
  ];

  const container = document.getElementById("lista-projetos");

  projetos.forEach(projeto => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <h3>${projeto.nome}</h3>
      <p>${projeto.descricao}</p>
    `;

    container.appendChild(div);
  });

});