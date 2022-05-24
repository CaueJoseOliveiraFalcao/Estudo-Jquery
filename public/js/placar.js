$('#botao-placar').click(mostrarPlacar)
$('#botao-salvar').click(salvarSC)
$('.placar').hide()
$( document ).ready(function() {
    mostrarsinc()
});
function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Douglas"
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.prepend(linha);
    $(".placar").slideDown(500);
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha() {
    event.preventDefault();
    $(this).parent().parent().fadeOut(600);
    setTimeout(() => {
        $(this).parent().parent().remove()
    },600);

}

function mostrarPlacar(){
    $('.placar').stop().slideToggle(600);
}

function salvarSC(){
    var placar = []
    var linha = $('tbody tr')
    linha.each(function(){
        var usuario = $(this).find('td:nth-child(1)').text()
        var pontuacao = $(this).find('td:nth-child(2)').text()

        var score = {
            'usuario' : usuario,
            'pontos' : pontuacao,
        };
        placar.push(score)
    })
    console.log(placar)
    var dados = {
        placar : placar
    }
    $.post('http://localhost:3000/placar',dados,function(){
        console.log('sincronizou')
    })
}

function mostrarsinc(){
    $.get('http://localhost:3000/placar',function(data){
        for(json in data){
            var linha = novaLinha(data[json].usuario, data[json].pontos);
            linha.find(".botao-remover").click(removeLinha);

            $(".placar").find("tbody").prepend(linha);
            $(".placar").slideDown(500);
        }
    })
}

