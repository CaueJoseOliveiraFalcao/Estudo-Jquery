$(document).ready(function(){
    AtualizaFrase()
    InicializaContadores()
    InicializaCronometo()
})

function AtualizaFrase() {
    let frase = $(".frase").text().split(' ').length;
    let tamanhoDaFrase = $('.contador-palavras').text(frase);
};
let campo = $('.campo-de-digitacao');
function InicializaContadores(){
    campo.on('input', function () {
        let campo_main = campo.val();
        $('.contador-palavras-l').text(campo_main.split(/\S+/).length - 1);
        $('.contador-caracteres').text(campo_main.split('').length);
    })
};
let log = $('.tempo-digi').text()
function InicializaCronometo(){
    campo.on('focus' , function(){
        let close = setInterval(function(){
        log--;
        $('.tempo-digi').text(log)

        if(log == 0){
            campo.attr('disabled' , true)
            clearInterval(close)
        }
    },1000)
})}