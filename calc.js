function imc(){
    let nome = document.querySelector("#nome").value
    let altura = document.querySelector("#altura").value
    let peso = document.querySelector("#peso").value
    let resultado = document.querySelector("#resultado")

    if (nome !== '' && altura !== '' && peso !== '') {


        valorImc = (peso / (altura * altura)).toFixed(1)

        if (valorImc < 18.5) {
            tipoIMC = 'Abaixo do peso'


        } else if (valorImc > 18.5 && valorImc < 25) {
            tipoIMC = 'Peso ideal'
        }

        else if (valorImc < 30) {
            tipoIMC = 'Um pouco abaixo do peso'
        }

        else if (valorImc < 35) {
            tipoIMC = 'Obesidade grau 1'
        }

        else if (valorImc < 40) {
            tipoIMC = 'Obesidade grau 2'
        }


        else {
            tipoImc = 'Obesidade grau 3'
        }

        resultado.textContent= `${nome} seu IMC é ${valorImc} e você está com: ${tipoIMC}`
    } else{
        resultado.textContent =`Preencha todos os campos`
    }
}