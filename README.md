Descrição do Projeto.
Este é um jogo simples de adivinhação, onde o usuário precisa tentar descobrir um número secreto gerado pelo sistema. O jogo fornece dicas sobre se o número escolhido pelo jogador é maior ou menor do que o número secreto.

1- Primeira aula: Introdução ao Projeto.
**Objetivo:** Criar o esqueleto básico do jogo. - **Comando Inicial:** Exibir uma mensagem de boas-vindas ao jogador.

**Exemplo:** alert('Olá, seja bem-vindo ao jogo do número secreto');

2- Segunda Aula: Variáveis ​​e Entrada do Usuário.
**Objetivo:** Criar variáveis ​​e coleta de entradas do usuário. - **Exemplo:** Definimos uma variável para o número secreto.

**Exemplo:** let numeroSecreto = 8;

Coletamos a tentativa do usuário usando `prompt`.
Executando um comando para encontrar o número secreto.

**Exemplo:** let chute = prompt ('Escolha um número entre 1 a 15');

3- Terceira aula: Condições e Comparação de Valores.
**Objetivo:** Comparar valores e tomar ações com base na comparação.

**Exemplo:** Se o chute do jogador for igual ao número secreto, mostramos uma mensagem de parabéns.
**Exemplo:** if (chute == númeroSecreto) {
 console.log ('Parabéns, você acertou o número secreto (8))';
}
`Uma mensagem será exibida no console, que pode ser acessada no navegador em Inspecionar > Console`

4- Quarta aula: Uso do `else` e ​​`Comentários`.
**Objetivo:** Else e comentarios.

Melhorar a lógica de decisão com o uso do `else` e ​​adicionar `comentários`.
else é uma palavra-chave que significa "senão" e é usada em conjunto com if para executar um bloco de código quando a condição do if for falsa.

**Exemplo de `if/else`:** if (chute == numeroSecreto) { alert ('Parabéns você acertou o número secreto');} else { alert ('Você errou o número secreto, tente novamente');}
**Comentários:** Comentários são usados ​​para facilitar a leitura do código para outros desenvolvedores e são ignorados pelo navegador.

5- Quinta aula: Concatenação e Template Strings.
**Objetivo:** Melhorar a formatação de mensagens com concatenação e template strings. 

**Exemplo de Template String:** alert (`Parabéns você acertou o número secreto ${numeroSecreto}`);.
Com o template strings, permite que você insira variáveis ​​diretamente na string, usando a sintaxe `${variavel}`.

6- Sexta aula: Live Server.
**Objetivo:** Usar o Visual Studio Code com a extensão Live Server para atualizar automaticamente o código no navegador.
Ensinando instalar a extensão Live server no visual studio code.
com essa extensão instalada, você não precisa atualizar a página toda vez que fizer uma alteração no seu código, será atualizado automaticamente.

**Melhorias no código:**
**Ajustes realizados:**

1- **Desabilitação do `console.log`:** Para evitar que perdas desnecessárias sejam aplicadas na página, desativei a função `console.log`. Isso foi feito da seguinte maneira: console.log = function() {};
2 - **Conversão de valores com `parseInt`:** Ao receber o valor do chute, utilizei `parseInt` para garantir que o valor seja tratado como um número inteiro e não como uma string. Vale lembrar que: - `parseInt` é ideal para converter números inteiros. - Para números decimais, é mais adequado usar `Number`, **Exemplo de uso Number:** `chute = Number(chute);`, **Exemplo de uso parseInt:** `chute = parseInt(chute);`.

7- Sétima aula: Adicionando dicas de **"maior" ou "menor":** 
**Objetivo:** Para melhorar a interação com o usuário, implementei uma condição que avisa se o chute foi maior ou menor que o número secreto.

**Exemplo:** if (chute > numeroSecreto){
        alert(`O numero secreto é menor que ${chute}`);
    } else {
        alert(`O numero secreto é maior que ${chute}`);
    }

8- Oitava aula: Estruturas de Repetição.
**Objetivo:** Repetir a interação até o usuário acertar o número secreto. O objetivo desta parte do código é permitir que o usuário continue tentando acertar o número secreto.
Para isso, utilizamos o **loop `while`**. que repete o processo de uma condição até acertar a verdadeira.

**Exemplo:** while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 15');
}
    
A condição dentro do `while` verifica se o valor da variável `chute` é diferente (`!=`) do número secreto. Enquanto essa condição for verdadeira, o loop continuará executando.
**Vale lembrar que:** toda parte do código que queira repetição do `while` tem que estar dentro da condição `while`.

**Operadores de Comparação:**
(`!=` "Diferente")
(`==` "Igual")
(`>` "Maior")
(`>=` "Maior ou igual")
(`++` "Para atribuir mais 1")

9- Nona aula: Tentativas.
**Objetivo:** Mostrar ao usuario a quantidade de tentativas que ele teve até acertar o numeroSecreto, para isso utilizamos o operador `++` que incrementa o valor da variável `tentativas` em 1 a cada tentativa.
**Como funciona:** - Cada vez que o usuário faz uma tentativa, o número de tentativas aumenta em 1 e é exibido na tela.

**Exemplo:** `tentativas++;` ou `let tentativa = 1;` (caso queira iniciar com 1).
**Onde adicionar o incremento de tentativas:** 1. - **Dentro do bloco `else`**.
Sempre que o chute for incorreto, maior ou menor que o número secreto, incrementamos as tentativas.

**Exemplo:** else {
                alert(`O numero secreto é maior que ${chute}`);
            }
            **tentativas++;**
            
`tentativas++;` Também deve ser incrementado dentro do comando `if` no comando alert.

**Exemplo:** if (chute == numeroSecreto) {
            alert (`Parabéns, você acertou o número secreto ${numeroSecreto}, com ${tentativas} tentativas!`);
}

10 - Decima aula: Break
**Objetivo:** Quando o usuário acertar o número secreto na primeira tentativa, a mensagem de alerta deve indicar "1 tentativa" ao invés de "1 tentativas".

**Como funciona:** Utilizamos o comando `break;` dentro do loop `while`, logo após a verificação da condição de acerto (caso o número chutado seja igual ao número secreto). O `break;` irá interromper o loop imediatamente assim que o acerto acontecer.

**Passo a passo**: 1- Verifique se o chute do usuário é igual ao número secreto.
2- Caso o chute seja correto, o break; interrompe o loop, evitando que o contador de tentativas continue aumentando desnecessariamente.
3- Caso o chute esteja errado, é exibido um alerta indicando se o número secreto é maior ou menor do que o valor informado.
4- O número de tentativas é contado em uma variável separada.

**Exemplo:**  while {
    let chute = prompt("Digite o numero secreto:");
    
    if (chute == numeroSecreto) {
        break; // Interrompe o loop se o usuário acertar o número secreto
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`); // Alerta quando o chute for maior
        } else {
            alert(`O número secreto é maior que ${chute}`); // Alerta quando o chute for menor
        }
    }
    tentativas++; // Incrementa o número de tentativas a cada loop
}

// Exibição da mensagem final após o loop
if (tentativas > 1) {
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto}, com ${tentativas} tentativas!`);
} else {
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto}, com ${tentativas} tentativa!`);
}

**Explicações importantes:** 1- O `break;` é utilizado dentro do loop while para parar a execução quando o número secreto for acertado.

2- Fora do loop, usamos uma estrutura `if/else` para verificar o número de tentativas e exibir a mensagem correta, singular ou plural, de acordo com o número de tentativas realizadas.

11- Decima primeira aula: Operador ternário.
O operador ternário é uma forma compacta de escrever uma estrutura condicional if-else. Ele é usado para simplificar a escrita de condições simples, tornando o código mais conciso.
**Objetivo:**
O objetivo do operador ternário é fazer uma escolha entre dois valores com base em uma condição. Ele é útil quando você deseja realizar uma verificação simples e atribuir um valor a uma variável ou executar uma ação dependendo de um teste condicional.

**Explicação:**
Condição: tentativas > 1
O operador ternário verifica se o número de tentativas (tentativas) é maior que 1.

Valor se verdadeiro: 'tentativas'
Se o número de tentativas for maior que 1, a variável palavraTentativas será atribuída com o valor 'tentativas'.

Valor se falso: 'tentativa'
Se o número de tentativas for igual a 1, a variável palavraTentativas será atribuída com o valor 'tentativa'.

**Como Funciona:**
Depois que o usuário acerta o número secreto, o código exibe uma mensagem de parabéns com o número de tentativas. O operador ternário ajuda a decidir se a palavra "tentativa" ou "tentativas" será exibida de acordo com o número de tentativas feitas.

**Por exemplo:**
1- Se o usuário acertar o número secreto na primeira tentativa (tentativas = 1), a mensagem exibirá "1 tentativa".
2- Se o usuário acertar o número secreto depois de mais de uma tentativa (tentativas > 1), a mensagem exibirá "X tentativas", onde X será o número de tentativas feitas.

**Por que usar o operador ternário aqui?**
O operador ternário é uma maneira mais concisa de escrever uma simples condição if-else:

Se tentativas > 1, a palavra será 'tentativas'.
Se não, a palavra será 'tentativa'.

Em vez de escrever uma estrutura if-else mais longa, você consegue a mesma funcionalidade de forma compacta e legível.

12- Decima segunda aula: Math random.
**Objetivo:** Math.random() – Gerando Números Aleatórios.
O método Math.random() em JavaScript é utilizado para gerar números aleatórios. Ele retorna um valor decimal entre 0 (inclusive) e 1 (exclusivo).

**Exemplo:** 
let numeroAleatorio = Math.random();
console.log(numeroAleatorio); // Exemplo de saída: 0.374251925346938

**Gerando números em um intervalo específico:**
Para gerar um número aleatório dentro de um intervalo personalizado, como de 1 a 10, você pode fazer da seguinte forma:

**Exemplo:** let numero = Math.floor(Math.random() * 10) + 1;
console.log(numero); // Exemplo de saída: 3 (número aleatório entre 1 e 10)

1- Math.random() gera um número entre 0 e 1.
2- Math.floor() arredonda para baixo, garantindo um número inteiro.
3- O + 1 ajusta o intervalo para começar em 1.

13- Decima terceira aula: Continuando com o uso de Math.random().
**Objetivo:** Utilizar a função Math.random() para gerar números inteiros aleatórios.

**Exemplo:** let numeroSecreto = parseInt(Math.random() * 15 + 1)
Esse código é uma forma de gerar números inteiros aleatórios dentro do intervalo de 1 a 15.

**Como funciona:** 1- Math.random() gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo).
2- Ao multiplicar o valor retornado por Math.random() por 15, obtemos um número decimal entre 0 e 15 (exclusivo).
3- Ao adicionar 1 ao resultado da multiplicação, o intervalo de valores passa a ser entre 1 e 16 (exclusivo).
4- A função parseInt() é usada para converter o número decimal resultante em um número inteiro, descartando a parte decimal.

14- Decima quarta aula: Número máximo.
**Objetivo:** Definir o valor máximo que o número secreto pode ter.

**Como funciona:** O número secreto será gerado aleatoriamente entre 1 e 100 (inclusive). Isso ocorre através da expressão parseInt(Math.random() * numeroMaximo + 1), onde Math.random() gera um valor aleatório entre 0 (inclusive) e 1 (exclusive). Multiplicando isso por numeroMaximo e somando 1, garantimos que o valor esteja entre 1 e 100.

**Exemplo:** let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);}.