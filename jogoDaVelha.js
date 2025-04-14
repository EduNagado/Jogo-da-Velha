let jogador = "X";
let jogadorVez = "O";
let jogadorAtual = "";
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
        cell.textContent = jogadorAtual;
        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
        jogadas++;

        exibirJogadorDaVez();
        verificarVitoria();
    }
    
}

function verificarVitoria() {
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

        if (cellA.textContent === jogadorAtual && cellB.textContent === jogadorAtual && cellC.textContent === jogadorAtual) {
            alert(`Jogador ${jogadorAtual} venceu!`);
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
    exibirJogadorDaVez();
}

const exibirJogador = document.getElementById("jogadorDaVez");


