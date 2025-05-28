function calcularImc(){
    //Entrda de dados
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    //Processamento
    let imc = peso / (altura * altura);
    let classificacao = "";

    //Saída de dados
        if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }
    document.getElementById("imc-valor").innerHTML = "Seu IMC é: " + imc.toFixed(2);
    document.getElementById("Classificação").innerHTML = "Classificação: " + classificacao;
}