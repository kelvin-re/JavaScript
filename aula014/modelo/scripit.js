function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        let sex = document.getElementsByName('sex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'menino.png')
            }
            else if(idade < 18){
                // Jovem
                img.setAttribute('src', 'adolecenteM.png')
            }
            else if(idade < 59){
                // Adulto
                img.setAttribute('src', 'homem.png')
            }
            else{
                // Idoso
                img.setAttribute('src', 'idosoM.png')
            }
        }

        else{
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'menina.png')
            }
            else if(idade < 18){
                // Jovem
                img.setAttribute('src', 'adolecenteF.png')
            }
            else if(idade < 59){
                // Adulto
                img.setAttribute('src', 'mulher.png')
            }
            else{
                // Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}