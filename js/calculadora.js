function Calcular() {
    console.log("Calculando pontos...");

    const ref = Number("5000");
    const provaAvulco = {
        'arroz5': "10",
        'arroz1': '2',
        'feijao2': '8',
        'feijao1': '4',
        'oleo': '4',
        'macarrao': '4',
    };
    let teams = {
        'Amarela': {
            'prova1': 54,
            'prova2': 27,
        },
        'Bordo': {
            'prova1': 88,
            'prova2': 44,
        },
        'Cinza': {
            'prova1': 51,
            'prova2': 26,
        },
        'Laranja': {
            'prova1': 24,
            'prova2': 11,
        },
        'Preto': {
            'prova1': 60,
            'prova2': 30,
        },
        'Rosa': {
            'prova1': 44,
            'prova2': 22,
        },
        'Roxo': {
            'prova1': 42,
            'prova2': 21,
        },
        'Verde': {
            'prova1': 61,
            'prova2': 31,
        },
        'Vermelho': {
            'prova1': 32,
            'prova2': 16,
        }
    };
    
    let team = String(document.getElementById("team").value);

    if (team == "") {
        alert("Selecione a equipe.")
    }
    else {
        console.log(team)

        let prova1 = Number(teams[team].prova1);
        let prova2 = Number(teams[team].prova2);
        console.log(prova1)
        console.log(prova2)

        // Obtém os valores itens avulcos
        let pontosArroz5 = 0, 
            pontosArroz1 = 0, 
            pontosFeijao2 = 0, 
            pontosFeijao1 = 0, 
            oleo = 0, 
            macarrao = 0;

        pontosArroz5 = TotalAvulco(Number(document.getElementById("qtdeArroz5").value), Number(provaAvulco.arroz5));
        pontosArroz1 = TotalAvulco(Number(document.getElementById("qtdeArroz1").value), Number(provaAvulco.arroz1));
        pontosFeijao2 = TotalAvulco(Number(document.getElementById("qtdeFeijao2").value), Number(provaAvulco.feijao2));
        pontosFeijao1 = TotalAvulco(Number(document.getElementById("qtdeFeijao1").value), Number(provaAvulco.feijao1));
        oleo = TotalAvulco(Number(document.getElementById("qtdeOleo").value), Number(provaAvulco.oleo));
        macarrao = TotalAvulco(Number(document.getElementById("qtdeMacarrao").value), Number(provaAvulco.macarrao));

        let totalAvulco = Number(pontosArroz5 + pontosArroz1 + pontosFeijao2 + pontosFeijao1 + oleo + macarrao)

        console.log(totalAvulco)

        let totalKit = TotalProva(Number(document.getElementById("kit").value), prova1, ref);
        let totalLeite = TotalProva(Number(document.getElementById("leite").value), prova1, ref);
        let totalSuplemento = TotalProva(Number(document.getElementById("suplemento").value), prova2, ref);
        let totalSangue = TotalProva(Number(document.getElementById("sangue").value), prova2, ref);


        let totalPontos = Number(totalAvulco + totalKit + totalLeite + totalSuplemento + totalSangue);
        console.log(totalPontos)

        document.getElementById("totalPontos").innerText = totalPontos.toFixed(0)
    }
}

function TotalAvulco(qtde, pontos) {

    let totalAvulco = (qtde * pontos)

    return totalAvulco
}

function TotalProva(val, target, ref) {
    let totalProva = 0;

    if (val >= target) {
        totalProva = ref + ((val - target) * (ref / target));
    } else {
        totalProva = val * (ref / target); 
    }

    return totalProva;
}
