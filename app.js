function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("pesquisa-movimentos");

    //para comparar o valor digitado com o banco de dados
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value.toLowerCase();

    //se o campo pesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p> Nada foi encontrado, digite um movimento</p>"
        return;
    }
    campoPesquisa=campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se titulo includes campo pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="resultado-movimento">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Clique aqui e confira!</a>
            </div>
        `;}
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}



