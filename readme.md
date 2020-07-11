## Titulo do projeto
<h1 align="center">Vaga Backend Developer JR - Zenvia</h1>

## Tópicos
[Descrição do projeto](#descricao)<br>
[O que a plataforma é capaz de fazer](#Oquefaz)<br>
[Pré-requisitos](#prerequisitos)<br>
[Como rodar a aplicação](#comorodar)<br>
[Comandos SQL](#comandossql)<br>
[Como utilizar o token](#token)<br>
[Rotas da aplicação](#rotas)<br>

## Descrição do Projeto
<p align="justify" name="descricao">
  &nbsp;&nbsp;&nbsp;&nbsp;Desenvolver uma aplicação capaz de simular uma partida
  de Jokenpo entre duas pessoas.
</p>

## Status do Projeto: Concluido :heavy_check_mark:

<!-- <img src="https://img.shields.io/static/v1?label=node&message=framework&color=blue&style=for-the-badge&logo=NODE"/> -->

## O que a plataforma é capaz de fazer :checkered_flag:

<p name="Oquefaz">:trophy: Criar seus próprios times.</p>
<p>:trophy: Criar seus próprios jogos utilizando esses times.</p>
<p>:trophy: Acompanhar a tabela de classificação.</p>

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
    "sudo docker run --name airfluencers_mysql -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 -d mysql"
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
    "sudo docker exec -it airfluencers_mysql /bin/bash"
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
    "create database airfluencers;"
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
    "git clone https://github.com/Kenzo13/vaga-backend-jr.git"
  </code>
</pre>

<p>
  9- Entra na pasta do projeto agora baixado:
</p>

<pre>
  <code>
    "cd pasta vaga-backend-jr/"
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
  Comando para criar tabela clubs.
</p>

<pre>
  <code>
    "CREATE TABLE clubs(
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      nameOfTeam VARCHAR(40) NOT NULL,
      yearOfFoundation VARCHAR(10),
      stateOfClub VARCHAR(20)
    );"
  </code>
</pre>

<p>
  Comando para trazer os dados da tabela clubs.
</p>

<pre>
  <code>
    "SELECT * FROM clubs;"
  </code>
</pre>

<p>
  Comando para criar tabela games.
</p>

<pre>
  <code>
    "CREATE TABLE games (
      id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
      nameOfTeamA varchar(20) NOT NULL,
      nameOfTeamB varchar(20) NOT NULL,
      golsFromTeamA INT NOT NULL,
      golsFromTeamB INT NOT NULL,
      scoreboard varchar(5) NOT NULL
    );"
  </code>
</pre>

<p>
  Comando para trazer os dados da tabela games.
</p>

<pre>
  <code>
    "SELECT * FROM games;"
  </code>
</pre>

<p>
  Comando para criar tabela gamesPoints.
</p>

<pre>
  <code>
    "CREATE TABLE gamesPoints (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      idOfGame INT NOT NULL,
      idOfTeamA INT NOT NULL,
      idOfTeamB INT NOT NULL,
      qtdPointsForTeamA INT NOT NULL,
      qtdPointsForTeamB INT NOT NULL,
      FOREIGN KEY (idOfGame) REFERENCES games(id),
      FOREIGN KEY (idOfTeamA) REFERENCES clubs(id),
      FOREIGN KEY (idOfTeamB) REFERENCES clubs(id)
    );"
  </code>
</pre>

<p>
  Comando para trazer os dados da tabela gamesPoints.
</p>

<pre>
  <code>
    "SELECT * FROM gamesPoints;"
  </code>
</pre>


<p>
  Comando para criar a tabela users.
</p>

<pre>
  <code>
    "CREATE TABLE users(
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      userName VARCHAR(50) NOT NULL,
      email VARCHAR(255) NOT NULL,
      userPassword VARCHAR(255) NOT NULL
    );"
  </code>
</pre>

<p>
  Comando para trazer os dados da tabela users.
</p>

<pre>
  <code>
    "SELECT * FROM users;"
  </code>
</pre>

## Como utilizar o token.

<p name="token">
  &nbsp;&nbsp;&nbsp;&nbsp; Para utilizar o token, você deve gerar a sessão. No insomnia você vai na aba "Auth" com o token copiado e seleciona a opção "Bearer Token", no campo "token" você coloca o mesmo.<br>
  No postman é praticamente o mesmo método. Se precisar utilize a documentação do postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#bearer-token
</p>

## Rotas da aplicação.
<h1 name="rotas">OBS: Todas as rotas vão contar com um exemplo dos dados e formatos que devem ser enviados.</h1>
<br>
<br>

<p>
  &nbsp;&nbsp;&nbsp;&nbsp;Para utilizar todas as rotas é necessário ter seguido os passos anteriores de criação do container
  docker e a criação das tabelas no banco de dados.
</p>

<p>
  &nbsp;&nbsp;&nbsp;&nbsp;A primeira rota que você deve executar é a de cadastro de usuário
  <b>routes.post('/users', UserController.create);</b><br> 
  Essa rota vai criar um usuário para utilizar a aplicação.
</p>

<pre>
  <code>
    "
      {
        "name": "Raphael Kenzo",
        "email": "raphaelkenzo2586@gmail.com",
        "password": "123456"
      }
    "
  </code>
</pre>

<p>
  &nbsp;&nbsp;&nbsp;&nbsp;A próxima rota que deve ser utilizada é a de criação de sessão
  <b>routes.post('/sessions', SessionController.create);</b><br>
  Essa rota vai autenticar o usuário e senha, para gerar o token e acessar as demais rotas.
</p>

<pre>
  <code>
    "
      {
        "email": "raphaelkenzo2586@gmail.com",
        "password": "123456"
      }
    "
  </code>
</pre>

<p>
  &nbsp;&nbsp;&nbsp;&nbsp;A próxima rota que deve ser utilizada é a de criação dos clubs
  <b>routes.post('/clubs', middlewares.ensureAuthenticated, ClubController.create);</b><br>
  Essa rota vai criar os clubs que vão disputar o campeonato.
</p>

<pre>
  <code>
    "
      {
        "name": "Palmeiras",
        "yearOfFoundation": "25/01/1930",
        "stateOfClub": "São Paulo"
      }
    "
  </code>
</pre>

<p>
  &nbsp;&nbsp;&nbsp;&nbsp;Para verificar os dados do seu time e listar os mesmos, utilize a rota
  <b>routes.get('/clubs', middlewares.ensureAuthenticated, ClubController.index);</b><br>
</p>

<p>
  &nbsp;&nbsp;&nbsp;&nbsp;Agora vamos utilizar a rota de criação de jogos
  <b>routes.post('/games', middlewares.ensureAuthenticated, GameController.create);</b><br>
  Essa rota vai criar os jogos entre os times que você cadastrou.
</p>

<pre>
  <code>
    "
      {
        "teamA": "São Paulo",
        "teamB": "Santos",
        "golsFromTeamA": 1,
        "golsFromTeamB": 0
      }
    "
  </code>
</pre>

<p>
  &nbsp;&nbsp;&nbsp;&nbsp;Para verificar os dados do seu jogo, utilize a rota
  <b>routes.get('/games', middlewares.ensureAuthenticated, GameController.index);</b><br>
</p>

<p>
  &nbsp;&nbsp;&nbsp;&nbsp;Para verificar os dados do campeonato, utilize a rota
  <b>routes.get('/table', middlewares.ensureAuthenticated, TableController.index);</b><br>
</p>

<h1>
  OBS:Lembre-se de utilizar o token em todas as rotas com exceção da rota de criação de sessão e usuário.
</h1>