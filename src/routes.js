const { Router } = require('express');

const GameController   = require('./controllers/GameController');

const routes = Router();

routes.get('/jokenpo', GameController.index);
routes.post('/jokenpo', GameController.create);

module.exports = routes;