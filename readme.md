## Titulo do projeto
<h1 align="center">Vaga Developer JR - Zenvia</h1>

## Tópicos
[Descrição do projeto](#descricao)<br>
[O que a plataforma é capaz de fazer](#Oquefaz)<br>
[Pré-requisitos](#prerequisitos)<br>
[Como rodar a aplicação](#comorodar)<br>
[Comandos SQL](#comandossql)<br>
[Rotas da aplicação](#rotas)<br>

## Descrição do Projeto
<p align="justify" name="descricao">
  &nbsp;&nbsp;&nbsp;&nbsp;Desenvolver uma aplicação capaz de simular uma partida
  de Jokenpo entre duas pessoas.
</p>

## Status do Projeto: Concluido :heavy_check_mark:

## O que a plataforma é capaz de fazer :checkered_flag:

<p name="Oquefaz">:trophy: Criar diversas partidas de Jokenpo.</p>
<p name="Oquefaz">:trophy: Utilizar testes unitários.</p>

## Pré-requisitos
<a href="https://nodejs.org/en/download/" rel="nofollow" name="prerequisitos">
  :warning: NodeJs
</a>

<br>

<a href="https://classic.yarnpkg.com/en/docs/install/#debian-stable" rel="nofollow">
  :warning: Yarn
</a>

<br>

<a href="https://dev.mysql.com/doc/workbench/en/wb-installing.html" rel="nofollow">
  :warning: Mysql Workbench
</a>

<br>

<a href="https://insomnia.rest/download/" rel="nofollow">
  :warning: Insomnia (system 64bit)
</a>

<br>

<a href="https://www.postman.com/downloads/" rel="nofollow">
  :warning: Postman (system 64bit or 32bit)
</a>

<br>

## Como rodar a aplicação.

<p name="comorodar">
  1-Primeiro de tudo vamos baixar o docker rodando o comando a seguir.<br>
</p>

<pre>
  <code>
    "sudo docker pull mysql"
  </code>
</pre>

<p>
  2- Logo após isso vamos criar a nossa imagem e container.<br>
</p>

<pre>
  <code>
    "sudo docker run --name zenvia_mysql -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 -d mysql"
  </code>
</pre>

<p>
  3- Listar todos os containers da máquina.<br>
</p>

<pre>
  <code>
    "sudo docker ps -a"
  </code>
</pre>

<p>
  4- Agora vamos entrar no modo bash<br>
</p>

<pre>
  <code>
    "sudo docker exec -it zenvia_mysql /bin/bash"
  </code>
</pre>

<p>
  5- Logo após entrar em modo bash, vamos rodar o seguinte comando para entrar no mysql command line.
  Lembrando que as informação são -u(nome de usuário no mysql, no caso root) e -p(senha escolhida na criação)
  do container.<br>
</p>

<pre>
  <code>
    "mysql -uroot -pdocker"
  </code>
</pre>

<p>
  6- Entrando no modo mysql, vamos poder criar a database rodando o seguinte comando.<br>
</p>

<pre>
  <code>
    "create database zenvia;"
  </code>
</pre>

<p>
  7- Deslogar do mysql command line e bash é só escrever exit.<br>
</p>

<p>
  8- No terminal, clone o projeto:
</p>

<pre>
  <code>
    "git clone https://github.com/Kenzo13/Zenvia.git"
  </code>
</pre>

<p>
  9- Entra na pasta do projeto agora baixado:
</p>

<pre>
  <code>
    "cd pasta Zenvia/"
  </code>
</pre>

<p>
  10- Instale as dependencias:
</p>

<pre>
  <code>
    "yarn"
  </code>
</pre>

<p>
  11- Agora execute a aplicação:
</p>

<pre>
  <code>
    "yarn start"
  </code>
</pre>

## Comandos SQL

<p name="comandossql">
  Comando para criar tabela jokenpo(tabela dos jogos).
</p>

<pre>
  <code>
    "CREATE TABLE jokenpo(
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      namePlayerOne VARCHAR(50) NOT NULL,
      namePlayerTwo VARCHAR(50) NOT NULL,
      playerOneHand VARCHAR(15) NOT NULL,
      playerTwoHand VARCHAR(15) NOT NULL,
      qtdPointsForPlayerOne INT,
      qtdPointsForPlayerTwo INT,
      result VARCHAR(60)
    );"
  </code>
</pre>

<p>
  Comando para trazer os dados da tabela jokenpo.
</p>

<pre>
  <code>
    "SELECT * FROM jokenpo;"
  </code>
</pre>

<p>
  Comando para criar tabela hand(tabela essa que armazena os simbolos que o usuário
  pode utilizar, como pedra, papel & tesoura).
</p>

<pre>
  <code>
    "CREATE TABLE hand(
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      symbol VARCHAR(15) NOT NULL
    );"
  </code>
</pre>

<p>
  Comando para trazer os dados da tabela hand.
</p>

<pre>
  <code>
    "SELECT * FROM hand;"
  </code>
</pre>

<p>
  Comando para gerar os dados necessários para a aplicação funcionar.
</p>

<pre>
  <code>
    "INSERT INTO hand(symbol) VALUES('pedra');"
    "INSERT INTO hand(symbol) VALUES('papel');"
    "INSERT INTO hand(symbol) VALUES('tesoura');"
  </code>
</pre>

## Rotas da aplicação.
<h1 name="rotas">OBS: Todas as rotas vão contar com um exemplo dos dados e 
  formatos que devem ser enviados.
</h1>
<br>
<br>

<p>
  &nbsp;&nbsp;&nbsp;&nbsp;Para utilizar todas as rotas é necessário ter seguido os passos anteriores de criação do container docker e a criação das tabelas no banco de dados.
</p>

<p>
  &nbsp;&nbsp;&nbsp;&nbsp;A primeira rota que você deve executar é a de criação de um jogo(jokenpo)
  <b>routes.post('/jokenpo', GameController.create);</b><br> 
  Essa rota vai criar um ou mais jogos de jokenpo.
</p>

<pre>
  <code>
    "
      {
        "namePlayerOne": "Teste1",
        "namePlayerTwo": "Teste2",
        "playerOneHand": "Papel",
        "playerTwoHand": "Tesoura"
      }
    "
  </code>
</pre>

<p>
  &nbsp;&nbsp;&nbsp;&nbsp;A próxima rota que pode ser utilizada é a de listagem de jogos
  <b>routes.get('/jokenpo', GameController.index);</b><br>
  Essa rota vai listar todos os jogos que a aplicação teve até o momento.
</p>

<h1><b>OBS:</b></h1>
<p>
  Para utilizar os testes automatizados,basta escrever no console <b>"yarn test"</b>
  deve ser retornado no seu console duas informações com um check verde, dizendo o seguinte
  "Should be able to create a new Jokenpo Game " e "Should be able to list all Jokenpo Games".
</p>