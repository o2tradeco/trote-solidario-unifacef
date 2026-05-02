function calcular() {
    console.log("Calculando horas-atividade...");

    // Obtém os valores dos campos de entrada
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value);
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value);
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value);
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value);
    let qtdeKit = Number(document.getElementById("qtdeKit").value);

    if (qtdeFeijao < 0 || qtdeArroz < 0) {
        alert("Por favor, revise as quantidades de alimentos.");
        return;
    }

    if (qtdeKit >= 60) {
        qtdeKit = 5000 + ((qtdeKit - 60) * (5000 / 60))
    } else qtdeKit = qtdeKit * (5000 / 60)

    // alert(qtdeKit)




    // Realiza o cálculo (exemplo simples)
    var horasAtividade = (qtdeFeijao * 8) + (qtdeArroz * 10) + (qtdeOleo * 4) + (qtdeMacarrao * 2) + qtdeKit; // Supondo que cada feijão vale 8 horas-atividade
    
    console.log(`Horas-atividade calculadas: ${horasAtividade}`);

    // Exibe o resultado para o usuário
    document.getElementById("totalHoras").innerText = horasAtividade;
}