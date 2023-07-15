function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada:  ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //mesma coisa se colocar o id na tag do html
        if (fsex[0].checked){ // se o que tiver marcado for 0, é masculino.
            gênero = 'um homem'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'bebehomem.png')

            } else if (idade < 21){
                img.setAttribute('src', 'jovemhomem.png')

            } else if (idade < 50){
                img.setAttribute('src', 'adultohomem.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }           

        } else if (fsex[1]. checked){
            gênero = 'uma mulher'

            if (idade >=0 && idade <10){
                img.setAttribute('src', 'bebemulher.png')

            } else if (idade <21){
                img.setAttribute('src', 'jovemmulher.png')

            } else if (idade < 50){
                img.setAttribute('src', 'adultomulher.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}
