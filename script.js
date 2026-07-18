function conta(){
    let altura = document.querySelector("#alt").value
    let peso = document.querySelector("#kg").value
    let soma = 0
    let resultado = document.querySelector(".result")
    soma = peso / (altura * altura)

    if(soma < 18.5){
        resultado.textContent = "Abaixo do peso"
    }else if(soma >= 18.5 && soma <= 24.9){
        resultado.textContent =("Peso ideal")
    }else if(soma >= 25 && soma <= 29.9){
        resultado.textContent =("Sobrepeso")
    }else if(soma >= 30 && soma <= 34.9){
        resultado.textContent =("Obesidade grau I")
    }else if(soma >= 35 && soma <= 39.9){
        resultado.textContent =("Obsidade grau II")
    }else{
        resultado.textContent =("Obsidade grau III")
    }
}
