const smallsquareAction = document.querySelectorAll("[data-smallsquare]");
const bigsquare = document.querySelector("[data-bigsquare]");
const textoVencedorAction = document.querySelector("[data-texto-vencedor]");
const textoVencedor = document.querySelector("[data-mensagemvencedor]");
const botaoVitoria = document.querySelector("[data-reiniciar]");

let turnoCirculo;

const combinacoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const checarVitoria = (jogadorAtual) => {
    return combinacoesVitoria.some(combinacao => {
        return combinacao.every((index) => {
            return smallsquareAction[index].classList.contains(jogadorAtual);
        });
    });
};

const checarEmpate = () => {
    return [...smallsquareAction].every((smallsquare) => {
      return smallsquare.classList.contains('x') || smallsquare.classList.contains('circulo');
    });
};

const comecarJogo = () => {
    turnoCirculo = false;
    for (const smallsquare of smallsquareAction){
        smallsquare.classList.remove("circulo");
        smallsquare.classList.remove("x");
        smallsquare.removeEventListener("click", click);
        smallsquare.addEventListener("click", click, {once:true});
    }

    jogada()
    textoVencedor.classList.remove("mostrarMensagemVencedor");
};

const fimJogo = (empate) => {
    if (empate){
        textoVencedorAction.innerText = 'Empate!';
    }   else {
        textoVencedorAction.innerText = turnoCirculo ? 'O Venceu!' : 'X Venceu!';
    }

    textoVencedor.classList.add("mostrarMensagemVencedor");
};

const colocar = (smallsquare, serAdicionado) => {
    smallsquare.classList.add(serAdicionado);
};

const jogada = () => {
    bigsquare.classList.remove("circulo");
    bigsquare.classList.remove("x");

    if (turnoCirculo) {
        bigsquare.classList.add("circulo");
    } else{
        bigsquare.classList.add("x");
    }
};

const trocarTurnos = () => {
    turnoCirculo = !turnoCirculo;

    jogada();
};

const click = (e) => {
    const smallsquare = e.target;
    const serAdicionado = turnoCirculo ? "circulo" : "x";
    colocar(smallsquare, serAdicionado);
    const vitoria = checarVitoria(serAdicionado);
    const empate = checarEmpate();
    if (vitoria){
        fimJogo(false);
    }   else if(empate){
        fimJogo(true);
    }   else {
        trocarTurnos();
    }
};

comecarJogo();

botaoVitoria.addEventListener('click', comecarJogo);