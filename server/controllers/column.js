const db = require('../model/db');

function getColumnList(req, res) {
	const columns = db.columns.list();

	res.send(columns);
}

function createColumn(req, res) {
	res.send(db.columns.create({name: 'Новая колонка'}));
}

module.exports = {
	getColumnList,
	createColumn
};