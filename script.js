var res = document.getElementById('res')
var img = document.getElementById('img')
var valor1 = document.getElementById('va1')
var valor2 = document.getElementById('va2')
var valor3 = document.getElementById('va3')
var valor4 = document.getElementById('va4')
var tent = document.getElementById('tent')
var cont = 0


// Digitos do jogador 
var digito1 = document.getElementById('digito1')
var digito2 = document.getElementById('digito2')
var digito3 = document.getElementById('digito3')
var digito4 = document.getElementById('digito4')

// dados do jogador

var senhaCorreta = []
var senha = []



function criarSenha() {

    while (senhaCorreta.length <= 3) {
        var valor = Math.floor(Math.random() * 10)
        if (senhaCorreta.indexOf(Number(valor)) < 0) {
            senhaCorreta.push(valor)
        }
    }




    return
}


function mostrar() {
    valor1.innerHTML = Number(digito1.value)
    valor2.innerHTML = Number(digito2.value)
    valor3.innerHTML = Number(digito3.value)
    valor4.innerHTML = Number(digito4.value)


    return
}



function adicionar() {
    if (Number(digito1.value) >= 0 && Number(digito1.value) <= 9 && Number(digito2.value) >= 0 && Number(digito2.value) <= 9
        && Number(digito3.value) >= 0 && Number(digito3.value) <= 9 && Number(digito4.value) >= 0 && Number(digito4.value) <= 9) {
        senha.push(Number(digito1.value))
        senha.push(Number(digito2.value))
        senha.push(Number(digito3.value))
        senha.push(Number(digito4.value))
        cont += 1
        mostrar()
    } else {
        alert('Erro numero invalido!')
        // location.reload()
    }
    return
}



function conferirDigitos() {
    // digito 1
    if (senhaCorreta.indexOf(senha[0]) >= 0) {
        if (senha.indexOf(senha[0]) == senhaCorreta.indexOf(senha[0])) {
            digito1.value = senha[0]
            digito1.disabled = true
            valor1.style.color = 'green'
        } else {
            valor1.style.color = 'yellow'
        }

    } else if (senhaCorreta.indexOf(senha[0]) < 0) {
        valor1.style.color = 'red'
    }

    // digito 2 
    if (senhaCorreta.indexOf(senha[1]) >= 0) {
        if (senha.indexOf(senha[1]) == senhaCorreta.indexOf(senha[1])) {
            digito2.value = senha[1]
            digito2.disabled = true
            valor2.style.color = 'green'
        } else {
            valor2.style.color = 'yellow'
        }
    } else if (senhaCorreta.indexOf(senha[1]) < 0) {
        valor2.style.color = 'red'
    }

    // digito 3
    if (senhaCorreta.indexOf(senha[2]) >= 0) {
        if (senha.indexOf(senha[2]) == senhaCorreta.indexOf(senha[2])) {
            digito3.value = senha[2]
            digito3.disabled = true
            valor3.style.color = 'green'
        } else {
            valor3.style.color = 'yellow'
        }
    } else if (senhaCorreta.indexOf(senha[2]) < 0) {
        valor3.style.color = 'red'
    }
    // digito 4
    if (senhaCorreta.indexOf(senha[3]) >= 0) {
        if (senha.indexOf(senha[3]) == senhaCorreta.indexOf(senha[3])) {
            digito4.value = senha[3]
            digito4.disabled = true
            valor4.style.color = 'green'
        } else {
            valor4.style.color = 'yellow'
        }
    } else if (senhaCorreta.indexOf(senha[3]) < 0) {
        valor4.style.color = 'red'
    }
    return
}

function tentativas() {

    function verificar() {

        if (senhaCorreta[0] == senha[0] && senhaCorreta[1] == senha[1] && senhaCorreta[2] == senha[2] && senhaCorreta[3] == senha[3]) {
            img.src = "img/cadeado_aberto.png"
        }
        return
    }


    tent.innerHTML += `<p>${cont}°  ${senha}</p>`

    return verificar()
}

function ranking() {
    var ranking = cont
    return
}
function refresh() {

    window.location.reload(true);

    return
}

function limpar() {

    digito1.value = '0'
    digito2.value = '0'
    digito3.value = '0'
    digito4.value = '0'

    valor1.value += ' '
    valor2.value += ' '
    valor3.value += ' '
    valor4.value += ' '
}

function enviar() {
    console.log(`Senha gerada : ${senhaCorreta}`)
    criarSenha()
    adicionar()
    limpar()
    conferirDigitos()
    ranking()
    tentativas()


    senha = []

}

