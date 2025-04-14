let jogadorVez = "O";
let jogadorAtual = "X"; 
let quadrado = "";
let jogadas = 0;
let jogadasMaximas = 9;

function exibirJogadorDaVez() {
    const exibirJogador = document.getElementById("jogadorDaVez");
    exibirJogador.innerHTML = `Jogador da vez: ${jogadorAtual}`;
}

function posicao(index) {
    const cell = document.getElementById(`cell-${index}`);

    if (cell.textContent === "") {
        const jogadorAnterior = jogadorAtual; 
        cell.textContent = jogadorAtual;
        jogadas++;

        verificarVitoria(jogadorAnterior); 

        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
        exibirJogadorDaVez();
    }
}

function verificarVitoria(jogadorVerificado) {
    const combinacoesVitoria = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < combinacoesVitoria.length; i++) {
        const [a, b, c] = combinacoesVitoria[i];
        const cellA = document.getElementById(`cell-${a}`);
        const cellB = document.getElementById(`cell-${b}`);
        const cellC = document.getElementById(`cell-${c}`);

        if (
            cellA.textContent === jogadorVerificado &&
            cellB.textContent === jogadorVerificado &&
            cellC.textContent === jogadorVerificado
        ) {
            alert(`Jogador ${jogadorVerificado} venceu!`);
            reiniciarJogo();
            return;
        }
    }

    if (jogadas === jogadasMaximas) {
        alert("Empate!");
        reiniciarJogo();
    }
  
}

function reiniciarJogo() {
    for (let i = 0; i < jogadasMaximas; i++) {
        const cell = document.getElementById(`cell-${i}`);
        cell.textContent = "";
    }
    jogadorAtual = "X"; 
    jogadas = 0;
    exibirJogadorDaVez();
}
