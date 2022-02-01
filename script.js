function contar() {
    var início = document.getElementById('txti'); 
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    var res = document.getElementById('res');

    if (início.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar!`;
        // window.alert('[Erro] Faltam dados!');

    } else {
        res.innerHTML = '<p>Contando: <br>';
        let i = Number(início.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p == 0){
            window.alert('Passo inválido, considerando Passo 1.');
            p = 1;  
        }

        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        }
        res.innerHTML += ` \u{1F3C1}<p>`;
    }
}