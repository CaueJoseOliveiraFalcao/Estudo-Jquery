$('#botao-frase').click(fraseAleatoria)
let tempo = $('#tempo-digitacao')

frase_container = $('.frase')

function fraseAleatoria(){
    $.get('http://localhost:3000/frases', function(data){
        let idAleatorio = Math.floor((Math.random() * data.length) + 1);
        frase_container.text(data[idAleatorio].texto);
        atualizaTamanhoFrase();
        tempo.text(data[idAleatorio].tempo)
    });
}