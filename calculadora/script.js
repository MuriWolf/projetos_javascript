var res = document.getElementById("res")
var conta = ""

function pegar_val(v) {
    var res = document.getElementById("res").innerHTML
    document.getElementById("res").innerHTML = res + v
    }


function calcular() {
    var res = document.getElementById("res").innerHTML
    if (res) {
        document.getElementById("res").innerHTML = eval(res)

    }
       
}

function apagar() {
    conta = ""
    document.getElementById("res").innerHTML = ""
}