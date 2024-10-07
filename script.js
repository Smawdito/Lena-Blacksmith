const valoresProducao = {
    item: {
        P: {
            Comum: { mn: 1350, tempo: '3:30', custoMn: 1350, venda: 1800 },
            Basico: { mn: 1010, tempo: '3:00', custoMn: 2020, venda: 2700 },
            Raro: { mn: 1685, tempo: '4:00', custoMn: 3370, venda: 4500 },
            Epico: { mn: 1855, tempo: '5:00', custoMn: 3710, venda: 4950 },
            Especial: { mn: 2100, tempo: '6:00', custoMn: 4200, venda: 6000 },
            Lendario: { mn: 2400, tempo: '7:00', custoMn: 4800, venda: 7200 },
            Iridescente: { mn: 2700, tempo: '8:00', custoMn: 5400, venda: 8400 }
        },
        M: {
            Comum: { mn: 1515, tempo: '3:00', custoMn: 1515, venda: 2025 },
            Basico: { mn: 1265, tempo: '3:30', custoMn: 2530, venda: 3375 },
            Raro: { mn: 1770, tempo: '4:00', custoMn: 3540, venda: 4725 },
            Epico: { mn: 2025, tempo: '5:30', custoMn: 4050, venda: 5400 },
            Especial: { mn: 2250, tempo: '6:30', custoMn: 4500, venda: 6750 },
            Lendario: { mn: 2550, tempo: '7:30', custoMn: 5100, venda: 8100 },
            Iridescente: { mn: 2850, tempo: '8:30', custoMn: 5700, venda: 9450 }
        },
        G: {
            Comum: { mn: 1685, tempo: '3:30', custoMn: 1685, venda: 2250 },
            Basico: { mn: 1685, tempo: '4:00', custoMn: 3370, venda: 4500 },
            Raro: { mn: 2025, tempo: '4:30', custoMn: 4050, venda: 5400 },
            Epico: { mn: 2255, tempo: '6:00', custoMn: 4510, venda: 6075 },
            Especial: { mn: 2500, tempo: '7:00', custoMn: 5000, venda: 7500 },
            Lendario: { mn: 2800, tempo: '8:00', custoMn: 5600, venda: 8400 },
            Iridescente: { mn: 3100, tempo: '9:00', custoMn: 6200, venda: 9300 }
        }
    },
    armadura: {
        P: {
            Comum: { mn: 1685, tempo: '2:30', custoMn: 1685, venda: 2250 },
            Basico: { mn: 1515, tempo: '3:00', custoMn: 3030, venda: 4050 },
            Raro: { mn: 2025, tempo: '4:00', custoMn: 4050, venda: 5400 },
            Epico: { mn: 2255, tempo: '5:00', custoMn: 4510, venda: 6075 },
            Especial: { mn: 2500, tempo: '6:00', custoMn: 5000, venda: 7500 },
            Lendario: { mn: 2800, tempo: '7:00', custoMn: 5600, venda: 8400 },
            Iridescente: { mn: 3100, tempo: '8:00', custoMn: 6200, venda: 9300 }
        },
        M: {
            Comum: { mn: 1855, tempo: '3:00', custoMn: 1855, venda: 2475 },
            Basico: { mn: 1770, tempo: '3:30', custoMn: 3540, venda: 4725 },
            Raro: { mn: 2255, tempo: '4:30', custoMn: 4510, venda: 6075 },
            Epico: { mn: 2530, tempo: '6:00', custoMn: 5060, venda: 6750 },
            Especial: { mn: 2800, tempo: '7:00', custoMn: 5600, venda: 8400 },
            Lendario: { mn: 3100, tempo: '8:00', custoMn: 6200, venda: 9300 },
            Iridescente: { mn: 3400, tempo: '9:00', custoMn: 6800, venda: 10200 }
        },
        G: {
            Comum: { mn: 2025, tempo: '3:30', custoMn: 2025, venda: 2700 },
            Basico: { mn: 2025, tempo: '4:00', custoMn: 4050, venda: 5400 },
            Raro: { mn: 2530, tempo: '5:00', custoMn: 5060, venda: 6750 },
            Epico: { mn: 2815, tempo: '6:30', custoMn: 5630, venda: 7425 },
            Especial: { mn: 3100, tempo: '7:30', custoMn: 6200, venda: 9300 },
            Lendario: { mn: 3400, tempo: '8:30', custoMn: 6800, venda: 10200 },
            Iridescente: { mn: 3700, tempo: '9:30', custoMn: 7400, venda: 11100 }
        }
    }
};

function converterTempoParaMinutos(tempo) {
    const partes = tempo.split(":");
    const horas = parseInt(partes[0]);
    const minutos = parseInt(partes[1]);
    return horas * 60 + minutos; // Converte horas e minutos para total em minutos
}

function calcular() {
    const tipo = document.getElementById("tipo").value;
    const tamanho = document.getElementById("tamanho").value;
    const raridade = document.getElementById("raridade").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);

    const valores = valoresProducao[tipo][tamanho][raridade];

    const mnTotal = valores.mn * quantidade;
    const tempoEmMinutos = converterTempoParaMinutos(valores.tempo); // Converte o tempo para minutos
    const tempoTotal = tempoEmMinutos * quantidade; // Multiplica o tempo total pelos itens
    const custoMnTotal = valores.custoMn * quantidade;
    const vendaTotal = valores.venda * quantidade;

    const resultadoElemento = document.getElementById("resultado");

    // Exibir os resultados com animação
    resultadoElemento.innerHTML = `
        <strong>Resultado:</strong><br>
        MN Total: ${mnTotal}<br>
        Tempo Total: ${Math.floor(tempoTotal / 60)}:${(tempoTotal % 60).toString().padStart(2, '0')}<br> <!-- Converte minutos de volta para hh:mm -->
        Custo em Dracmas: ${custoMnTotal}<br>
        Valor de Venda: ${vendaTotal}
    `;
    
    resultadoElemento.classList.add("show"); // Adiciona classe para animação
}