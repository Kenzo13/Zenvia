// const GameController = require('./GameController');
const request = require('supertest');
const app = require('../src/app');

describe('GameController', () =>{
  it('Should be able to create a new Jokenpo Game', async () =>{
    const response = await request(app)
      .post('/jokenpo')
      .send({
        namePlayerOne: "Teste1",
        namePlayerTwo: "Teste2",
        playerOneHand: "Papel",
        playerTwoHand: "Tesoura"
      });

    expect(response.body).toHaveProperty('result');
  });

  it('Should be able to list all Jokenpo Games', async () =>{
    const response = await request(app)
      .get('/jokenpo')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    console.log(response.body);
  });
});