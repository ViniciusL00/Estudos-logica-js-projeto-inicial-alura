Primeira aula.
1- Projeto do jogo do número secreto.
Projeto iniciado, primeiro comando  -  alert('Olá jinglebobs, Bem vindo ao jogo do número secreto');

Segunda aula.
2- Exibindo mensagens na tela, criando variaveis e executando um comando para encontrar a variavel.
Usando a palavra let para escrever uma variavel.
Exemplo: let numeroSecreto = 13;
Escrevi uma variavel.
Executando um comando para encontrar o número secreto
Exemplo: prompt('Escolha um número entre 1 a 13');

Terceira aula.
3- Comparando variaveis
Aprendendo condição
Exemplo: if (chute == númeroSecreto) {
 console.log ('Parabéns, você acertou o número secreto (13)';
} 
para isso é preciso executar let chute = prompt ('Escolha um número entre 1 a 13');
console.log irá exibir a mensagem se você acertar o número secreto (porém isso não aparecerá na tela).
onde aparecerá a mensagem do console.log? (Inspecionar na página, na aba console) a mensagem só irá aparecer, caso acerte o número secreto, caso contrário não irá aparecer.

Quarta aula.
4- Else e comentarios
Comentarios só é visto pelo desenvolvedor e para usar o comentário, Exemplo: //Aqui é um comentário. e o console.log é uma ferramenta usada para o desenvolvedor e não para o cliente.
else é uma palavra-chave que significa "senão" e é usada em conjunto com if para executar um bloco de código quando a condição do if for falsa.
Exemplo: if(chute == numeroSecreto) { alert ('Parabéns você acertou o número secreto'); else { alert ('Você errou o número secreto, tente novamente');

Quinta aula.
5- Concatenação
Template strings. isso é uma funcionalidade do JavaScript que permitem a criação de strings com expressões embutidas.
Template strings usando crases, chaves e cifrão, Exemplo: `Parabéns você acertou o número secreto ${numeroSecreto}`.

Sexta aula.
6- Live server
Ensinando instalar a extensão Live server no visual studio code.
com essa extensão instalada, você não precisa atualizar a página toda vez que fizer uma alteração no seu código, será atualizado automaticamente.

Adicionei alguns comentários e também desabilitei a função console.log para que os console.log não seja visto na página.
Exemplo: console.log = function() {};
Adicionei também parseInt para que o valor do chute não seja interpretado como uma string e sim como um número inteiro.
parseInt serve para números inteiros e Number serve para números decimal.
Exemplo: chute = parseInt (chute);

Sétima aula.
7- Usei a condição maior > para dizer para o jogador quando ele errar o número secreto, tivesse uma dica se o número é maior ou menor do que ele escolheu
Exemplo: if (chute > numeroSecreto){
        alert(`O numero secreto é menor que ${chute}`);
    } else {
        alert(`O numero secreto é maior que ${chute}`);
    }
