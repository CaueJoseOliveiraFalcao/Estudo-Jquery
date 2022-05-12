var tempoInicial = $('.tempo-digi').text()

$(function () {
    AtualizaFrase()
    InicializaContadores()
    InicializaCronometo()
    $('.reset-buttom').click(ReiniciaJogo)
})

function AtualizaFrase() {
    let frase = $(".frase").text().split(' ').length;
    $('.contador-palavras').text(frase);
};

let campo = $('.campo-de-digitacao');
function InicializaContadores() {
    campo.on('input', function () {
        let campo_main = campo.val();
        $('.contador-palavras-l').text(campo_main.split(/\S+/).length - 1);
        $('.contador-caracteres').text(campo_main.split('').length);
    })
};


function InicializaCronometo() {
    var tempo = $('.tempo-digi').text()
    campo.one('focus', function () {
        let close = setInterval(function () {
            tempo--;
            $('.tempo-digi').text(tempo)
            if(tempo < 1){
                campo.attr('disabled',true);
                clearInterval(close)
                campo.addClass('campo-desativado')
            }
        }, 1000)
    })
}
function ReiniciaJogo() {
        campo.attr('disabled', false)
        campo.val('');
        $('.contador-palavras-l').text('0');
        $('.contador-caracteres').text('0');
        $('.tempo-digi').text(tempoInicial);

        InicializaCronometo()
    }
