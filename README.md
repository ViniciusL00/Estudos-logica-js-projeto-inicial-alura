Descrição do Projeto.
Este é um jogo simples de adivinhação, onde o usuário precisa tentar descobrir um número secreto gerado pelo sistema. O jogo fornece dicas sobre se o número escolhido pelo jogador é maior ou menor do que o número secreto.

1- Primeira aula: Introdução ao Projeto.
**Objetivo:** Criar o esqueleto básico do jogo. - **Comando Inicial:** Exibir uma mensagem de boas-vindas ao jogador.
alert('Olá, seja bem-vindo ao jogo do número secreto');

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
 console.log ('Parabéns, você acertou o número secreto (8)';
}
`Uma mensagem será exibida no console, que pode ser acessada no navegador em Inspecionar > Console`

4- Quarta aula: Uso do `else` e ​​`Comentários`.
**Objetivo:** Else e comentarios.
Melhorar a lógica de decisão com o uso do `else` e ​​adicionar `comentários`.
else é uma palavra-chave que significa "senão" e é usada em conjunto com if para executar um bloco de código quando a condição do if for falsa.
**Exemplo de `if/else`:** if (chute == numeroSecreto) { alert ('Parabéns você acertou o número secreto'); else { alert ('Você errou o número secreto, tente novamente');
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
    
A condição dentro do `while` verifica se o valor da variável `chute` é diferente (`!=`) do número secreto. Enquanto essa condição for verdadeira, o loop continuará executando.
**Vale lembrar que:** toda parte do código que queira repetição do `while` tem que estar dentro da condição `while`.

**Operadores de Comparação:**
(`!=` "Diferente")
(`==` "Igual")
(`>` "Maior")
(`>=` "Maior ou igual")

