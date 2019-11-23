const db = require('../model/db');

function _getCardId(req) {
	return Number(req.params.id) || null;
}

function getCardList(req, res) {
	res.send(db.cards.list());
}

function getCard(req, res) {
	const id = _getCardId(req);

	res.send(db.cards.get(id));
}

function createCard(req, res) {
	const {body} = req;
	db.cards.create(body.columnId, {name: 'Новая карта', desc: 'Новое описание'}).then(dbRes => {
		res.send('Success');
	})
}

function updateCard(req, res) {
	const id = _getCardId(req);
	const {body} = req;

	res.send(db.cards.update(id, body));
}

function deleteCard(req, res) {
	const id = _getCardId(req);

	db.cards.delete(id);
}

module.exports = {
	getCard,
	getCardList,
	createCard,
	updateCard,
	deleteCard
};