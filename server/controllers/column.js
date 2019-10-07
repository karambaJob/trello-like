const db = require('../model/db');

function getColumnList(req, res) {
	const columns = db.columns.list();

	res.send(columns);
}

module.exports = {
	getColumnList
};