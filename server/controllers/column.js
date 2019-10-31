const db = require('../model/db');

function _getColumnId(req) {
	return Number(req.params.id) || null;
}

function getColumnList(req, res) {
	const columns = db.columns.list();

	res.send(columns);
}

function createColumn(req, res) {
	res.send(db.columns.create({name: 'Новая колонка'}));
}

function updateColumn(req, res) {
	const id = _getColumnId(req);
	const {body} = req;

	res.send(db.columns.update(id, body));
}

module.exports = {
	getColumnList,
	createColumn,
	updateColumn
};