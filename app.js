function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Digite o nome do atleta</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = "";
  let nome = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    nome = dado.nome.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    // se titulo includes campoPesquisa
    if (
      nome.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2 class="nome-logo">${dado.nome}<a href="${dado.pagina}" target="_blank"><img src="./imagens/instagram-logo.png" alt="Logo do Instagram" width="50" height="50"></a></h2>
        <div class="img-titulos">
          <img src="${dado.imagem}" alt="">
          <div class="div-info">
          <h3>Posição</h3>
          <p id="info">${dado.posicao}</p>
          <h3>Títulos</h3>
          <p id="info">${dado.titulos}</p>
          <h3>Nascimento</h3>
          <p id="info">${dado.dataNascimento}</p>
          <h3>Curiosidades</h3>
          <p id="info">${dado.curiosidades}</p>
          </div>
        </div>
        <p class="descricao-meta">${dado.descricao}</p>
      </div>
    `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}
