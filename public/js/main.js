let frase = $(".frase").text().split(' ').length;
let tamanhoDaFrase = $('.contador-palavras').text(frase);


let campo = $('.campo-de-digitacao');
campo.on('input' , function (){
    let campo_main = campo.val();
    $('.contador-palavras-l').text(campo_main.split(/\S+/).length - 1);
    $('.contador-caracteres').text(campo_main.split('').length);
});


let tempo = $('.tempo-digi').text()

campo.on('focus', function () {
    let stop = setInterval(function(){
        tempo--
        $('.tempo-digi').text(tempo)
        console.log(tempo)
        if(tempo == 0){
            campo.attr('disabled' , 'true');
            clearInterval(stop)
            alert(`Game Over`)
        }
    },1000)
})