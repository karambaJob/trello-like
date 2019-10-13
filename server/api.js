const express = require('express');
const apiRoute = express.Router();
const cardController = require('./controllers/card');
const columnController = require('./controllers/column');

apiRoute.get('/ping', function(req, res) {
	res.send({ping: 'ok'});
});

// Columns
apiRoute.get('/columnList', columnController.getColumnList);
apiRoute.post('/column', columnController.createColumn);

// Cards
apiRoute.get('/cardList', cardController.getCardList);
apiRoute.get('/card/:id', cardController.getCard);
apiRoute.post('/card', cardController.createCard);
apiRoute.put('/card/:id', cardController.updateCard);
apiRoute.delete('/card/:id', );

module.exports = apiRoute;