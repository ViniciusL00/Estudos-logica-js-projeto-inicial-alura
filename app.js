alert('Ola jinglebobs, Bem vindo ao jogo do número secreto');
let numeroSecreto = 8;
let chute = prompt('Escolha um número entre 1 e 15');
console.log ('valor do chute', chute);
console.log ('Resultado da comparação', chute == numeroSecreto);

// convertendo o prompt chute para número
chute = parseInt(chute); // Também pode ser usado Number(chute); para números decimal

if (chute == numeroSecreto) {
    alert (`Parabéns, você acertou o número secreto! ${numeroSecreto}`);
} else {
    console.log('Valor do número secreto', numeroSecreto);
    alert(`Você errou o número secreto, o número secreto era ${numeroSecreto}, mas você escolheu ${chute}!`);
}