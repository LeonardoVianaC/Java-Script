function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Erro! Verifique os dados')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade<3){
                //Bebe
                img.setAttribute('src','Nova pasta/bebeh.png')
            } else if(idade<12){
                //Criança
                img.setAttribute('src','Nova pasta/menino.png')
            }else if(idade<21){
                //Jovem
                img.setAttribute('src','Nova pasta/adolescenteh.png')
            }else if(idade < 65){
                //Adulto
                img.setAttribute('src','Nova pasta/homemadulto.png')
            }else{
                //Idoso
                img.setAttribute('src','Nova pasta/idoso.png')
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade<3){
                //Bebe
                img.setAttribute('src','Nova pasta/bebem.png')
            } else if(idade<12){
                //Criança
                img.setAttribute('src','Nova pasta/menina.png')
            }else if(idade<21){
                //Jovem
                img.setAttribute('src','Nova pasta/adolescentem.png')
            }else if(idade < 65){
                //Adulto
                img.setAttribute('src','Nova pasta/mulheradulta.png')
            }else{
                //Idoso
                img.setAttribute('src','Nova pasta/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    



}