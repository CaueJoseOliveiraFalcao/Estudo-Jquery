$('#botao-frase').click(fraseAleatoria)
$("#botao-frase-id").click(fraseEscolhida)
let tempo = $('#tempo-digitacao')

frase_container = $('.frase')

function fraseAleatoria() {
    $('#spiner').show()
    $.get('http://localhost:3000/frases', function (data) {
        let idAleatorio = Math.floor((Math.random() * data.length) + 1);
        frase_container.text(data[idAleatorio].texto)
        var frase = $(".frase").text();
        var numPalavras = frase.split(" ").length;
        var tamanhoFrase = $("#tamanho-frase");
        tamanhoFrase.text(numPalavras)
        tempo.text(data[idAleatorio].tempo)
        $('#spiner').hide()

    })
}

function fraseEscolhida() {
    var fraseId = $("#frase-id").val();
    var dados = { id: fraseId };
    $('#spiner').show()
    $.get('http://localhost:3000/frases', dados, trocaFrase)
}

function trocaFrase(data) {
    $('.frase').text(data.texto)
    $('#tempo-digitacao').text(data.tempo)
    atualizaTamanhoFrase()
    $('#spiner').hide()
}