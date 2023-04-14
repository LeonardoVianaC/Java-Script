function contar() {
    let num1 = document.getElementById('txtnumi')
    let num2 = document.getElementById('txtnumf')
    let passo = document.getElementById('txtnump')
    let res = document.getElementById('res')

    if (num1.value.length == 0 || num2.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(num1.value)
        let f = Number(num2.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('Passo inválido! Considerando PASSO igual a 1')
            p=1
        
            if(i < f){
                for(let c = i; c <= f;c += p) {
                res.innerHTML += ` ${c}  \u{1F449}`
                }
            } else {
                for(let c=i; c >= f; c -= p){
                res.innerHTML += ` ${c}  \u{1F449}`
                }
            }
        } else {
            if(i < f){
                for(let c = i; c <= f;c += p) {
                res.innerHTML += ` ${c}  \u{1F449}`
                }
            } else {
                for(let c=i; c >= f; c -= p){
                res.innerHTML += ` ${c}  \u{1F449}`
                }
            }
        }
        res.innerHTML += `\u{26D4}`
    }
}