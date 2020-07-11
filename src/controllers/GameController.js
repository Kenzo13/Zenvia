const util = require('util');

const connection = require('../database/connection');

module.exports = {
  async index(request, response){
    const sql = util.promisify(connection.query).bind(connection);

    try {
      const list = await sql("SELECT * FROM jokenpo");

      response.json(list);
    } catch {
      throw new Error('Does not exist games register');
    }
  },

  async create(request, response) {
    const { 
      namePlayerOne, 
      namePlayerTwo, 
      playerOneHand,
      playerTwoHand
    } = request.body

    const sql = util.promisify(connection.query).bind(connection);

    const checkIfPlayerHandOneExist = await sql("SELECT * FROM hand WHERE symbol = "+ `'${playerOneHand}'`);
    const checkIfPlayerHandTwoExist = await sql("SELECT * FROM hand WHERE symbol = "+ `'${playerTwoHand}'`);

    if(!checkIfPlayerHandOneExist.length > 0){
      return response.status(400).json({ error: 'The hand symbol of player One does not exist'});
    }

    if(!checkIfPlayerHandTwoExist.length > 0){
      return response.status(400).json({ error: 'The hand symbol of player Two does not exist'});
    }

    const playerOneHandLowerCase = playerOneHand.toLowerCase();
    const playerTwoHandLowerCase = playerTwoHand.toLowerCase();

    try {
      const game = {
        namePlayerOne, 
        namePlayerTwo, 
        playerOneHand: playerOneHandLowerCase, 
        playerTwoHand: playerTwoHandLowerCase,
      };

      if (
        game.playerOneHand === 'pedra'   && game.playerTwoHand === 'pedra' ||
        game.playerOneHand === 'papel'   && game.playerTwoHand === 'papel' ||
        game.playerOneHand === 'tesoura' && game.playerTwoHand === 'tesoura' 
      ){
        game.qtdPointsForPlayerOne = 0;
        game.qtdPointsForPlayerTwo = 0;
        game.result = 'Draw'
      }
      else if (
          game.playerOneHand === 'tesoura' && game.playerTwoHand === 'papel'   ||
          game.playerOneHand === 'pedra'   && game.playerTwoHand === 'tesoura' ||
          game.playerOneHand === 'papel'   && game.playerTwoHand === 'pedra'
        ){
          game.qtdPointsForPlayerOne = 1;
          game.qtdPointsForPlayerTwo = 0;
          game.result = `${game.namePlayerOne} Win`
      }
      else {
        game.qtdPointsForPlayerOne = 0;
        game.qtdPointsForPlayerTwo = 1;
        game.result = `${game.namePlayerTwo} Win`
      }

      connection.query('INSERT INTO jokenpo SET ?',game, async (error, result) => {
        if (error) throw error;
        
        console.log("Success to create a game!");

        game.id = result.insertId;
      });

      await response.json(game);

    } catch {
      throw new Error('Error to create a game');
    }
  },
};