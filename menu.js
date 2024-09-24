var efeito = document.getElementById('efeito')
const botoes = document.querySelectorAll('div.item')



botoes.forEach(function(botao){
    botao.addEventListener('click', function(){
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

