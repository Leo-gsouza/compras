var efeito = document.getElementById('efeito')
const botoes = document.querySelectorAll('div.item')
let botaoClicado = null



botoes.forEach(function(botao){
    botao.addEventListener('click', function(){
        botao.style.transform = 'scale(1.1)'
        botao.style.background = 'lightgoldenrodyellow'
        botao.style.fontSize = '1.5em'
        botao.style.boxShadow = '0px 0px 15px white'
        efeito.play()

        botaoClicado = botao
    })
})

efeito.addEventListener('ended', function(){
    botoes.forEach(function(botao){
        if (botaoClicado.id === 'b1'){
            window.location.href = 'paginas/cafe.html'
        }else if(botaoClicado.id === 'b2'){
            window.location.href = 'https://www.google.com.br/?hl=pt-BR'
        }
    })
    
})

function ver(book, menu){
    if (menu.style.display == 'block'){
        menu.style.display = 'none'
    }else{
        menu.style.display ='block'
        book.style.transform = 'scale'
    }
}


