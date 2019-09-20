const express = require('express');
const apiRoute = express.Router();
const cardController = require('./controllers/card');

apiRoute.get('/ping', function(req, res) {
	res.send({ping: 'ok'});
});

apiRoute.get('/cardList', cardController.getCardList);
apiRoute.get('/card/:id', cardController.getCard);
apiRoute.post('/card', );
apiRoute.put('/card/:id', );
apiRoute.delete('/card/:id', );

module.exports = apiRoute;