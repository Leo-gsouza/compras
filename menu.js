var efeito = document.getElementById('efeito')
const botoes = document.querySelectorAll('div.item')



botoes.forEach(function(botao){
    botao.addEventListener('click', function(){
        botao.style.scale = '1.1'
        botao.style.background = 'lightgoldenrodyellow'
        botao.style.fontSize = '1.5em'
        botao.style.boxShadow = '0px 0px 15px white'
        efeito.play()
    })

efeito.addEventListener('ended', function(){
    botoes.forEach(function(botao){
        if (botao.id == 'b1'){
            window.location.href = 'paginas/cafe.html'
        }
    })
    
})
})

