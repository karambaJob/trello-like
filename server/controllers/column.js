const db = require('../model/db');

function _getColumnId(req) {
	console.log(req.params);
	return req.params.id || null;
}

function getColumnList(req, res) {
	const columnsPromise = db.columns.list();

	columnsPromise.then(data => {
		res.send(data);
	})
}

function createColumn(req, res) {
	db.columns.create({name: 'Новая колонка'}).then(dbRes => {
		res.send();
	});
}

function updateColumn(req, res) {
	const id = _getColumnId(req);
	const {body} = req;

	db.columns.update(id, body).then(dbRes => {
		res.send('Success');
	})
}

module.exports = {
	getColumnList,
	createColumn,
	updateColumn
};