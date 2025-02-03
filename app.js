alert('Olá seja bem-vindo ao jogo do número secreto');
let numeroSecreto = 8;
console.log (numeroSecreto);
let chute;
let tentativas = 1;

// while / enquanto o chute não for igual ao numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 15');

        // Desabilitando a funcão console.log
    console.log = function() {}; // Isso faz com que o console.log não mostre nada

    console.log('valor do chute', chute); // Isso não aparecerá
    console.log('Resultado da comparação', chute == numeroSecreto); // Isso não aparecerá
    console.log('Valor do número secreto', numeroSecreto); // Isso não aparecerá

        // convertendo o prompt chute para número
        chute = parseInt(chute); // Também pode ser usado Number(chute); para números decimal

        if (chute == numeroSecreto) {
            break; // interrompe o loop se o usuario acertar o numero secreto
        } else {
            if (chute > numeroSecreto){
                alert(`O numero secreto é menor que ${chute}`); // um alerta para quando errar e dizer que o número é menor do que o escolhido
            } else {
                alert(`O numero secreto é maior que ${chute}`); // um alerta para quando errar e dizer que o número é maior do que o escolhido
            }
            // tentativas = tentativas +1;
            tentativas++;
        }
}

if (tentativas > 1){
    alert (`Parabéns, você acertou o número secreto ${numeroSecreto}, com ${tentativas} tentativas!`);
}   
 else { alert (`Parabéns, você acertou o número secreto ${numeroSecreto}, com ${tentativas} tentativa!`);
}