# Jogo-da-Velha

Este é um código JavaScript para um jogo da velha onde dois jogadores jogam alternadamente e marcam seus movimentos com "X" ou "O". Quando um dos jogadores conseguir marcar três símbolos consecutivos (vertical, horizontal ou diagonalmente), ele é o vencedor. Se não houver vencedor e todas as casas estiverem preenchidas, o jogo é considerado um empate.

## Variáveis

    smallsquareAction: Uma coleção de todas as casas do jogo da velha.
    bigsquare: Representa a visualização da vez de qual jogador jogar.
    textoVencedorAction: Exibe a mensagem de vencedor ou empate.
    textoVencedor: Exibe a mensagem de vencedor ou empate em tela.
    botaoVitoria: Botão para reiniciar o jogo.
    turnoCirculo: Variável booleana que determina se é a vez do jogador "O" ou "X".
    combinacoesVitoria: Lista de todas as combinações de casas que resultam em vitória.

## Funções

    checarVitoria(jogadorAtual): Verifica se o jogador atual tem uma combinação vencedora.
    checarEmpate(): Verifica se todas as casas foram preenchidas sem vencedor.
    comecarJogo(): Inicia o jogo, remove todas as jogadas anteriores e adiciona eventos de clique às casas.
    fimJogo(empate): Exibe a mensagem de vencedor ou empate e adiciona a classe "mostrarMensagemVencedor".
    colocar(smallsquare, serAdicionado): Adiciona a classe "x" ou "circulo" à casa clicada.
    jogada(): Alterna a visualização da vez de jogada entre "X" e "O".
    trocarTurnos(): Alterna a vez entre os jogadores.
    click(e): Função executada quando uma casa é clicada, verifica a vitória, empate ou troca de turno.
    botaoVitoria.addEventListener('click', comecarJogo): Reinicia o jogo ao clicar no botão "reiniciar".
