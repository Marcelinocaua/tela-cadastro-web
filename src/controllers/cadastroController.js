function exibirPaginaDeCadastro(request, response){
    return response.render('cadastro.ejs');
}

function criarConta(request, response){
    console.log(request.body);
}

module.exports = {
    exibirPaginaDeCadastro,
    criarConta
};