var titulo = document.querySelector(".titulo");
titulo.textContent = "Teste";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = true;
    var alturaEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3) {
        console.log("Peso inválido");
        alturaEhValido = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValido && pesoEhValido) {
        var imc = calculaImc(peso,altura);
    }

}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
    return imc;
}