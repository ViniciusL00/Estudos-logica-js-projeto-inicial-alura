alert('Ola jinglebobs, Bem vindo ao jogo do número secreto');
let numeroSecreto = 13;
let chute = prompt('Escolha um número entre 1 e 15');

if (chute == numeroSecreto) {
    alert ('Parabéns, você acertou o número secreto!');
} else {
    alert('Você errou o número secreto, tente novamente!');
}