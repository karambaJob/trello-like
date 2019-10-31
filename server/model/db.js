const cards = [{
	id: 1,
	column_id: 1,
	data: {
		name: 'Some name',
		desc: 'some desc'
	},
	createdAt: new Date(),
	deletedAt: null
}, {
	id: 2,
	column_id: 1,
	data: {
		name: 'Some other name',
		desc: 'some other desc'
	},
	createdAt: new Date(),
	deletedAt: null
}];

const columns = [{
	id: 1,
	createdAt: new Date(),
	data: {
		name: 'Column 1',
		order: 1
	}
}];

const dbData = {
	cards,
	columns
};

function getColumnCards(column_id) {
	return dbData.cards.filter(card => card.column_id === column_id);
}

const db = {
	cards: {
		list: function() {
			return dbData.cards.filter(card => !card.deletedAt);
		},
		get: function(id) {
			return dbData.cards.find(card => card.id === id);
		},
		create: function(column_id, data) {
			const newCard = {
				id: dbData.cards.length + 1,
				createdAt: new Date(),
				column_id: column_id,
				data
			};

			dbData.cards.push(newCard);
			return newCard;
		},
		update: function(id, data) {
			const card = db.cards.get(id);
			card.data = data;

			return card;
		},
		delete: function(id) {
			db.cards.get(id).deletedAt = new Date();
			return;
		}
	},
	columns: {
		list: function() {
			const columns = dbData.columns;

			return columns.map(column => {
				return db.columns.get(column.id);
			});
		},
		get: function(id) {
			const findedColumn = dbData.columns.find(column => column.id === id);
			if (findedColumn) {
				const resColumn = new Object(findedColumn);
				resColumn.cards = getColumnCards(id);

				return resColumn;
			}

			return null;
		},
		create: function(data) {
			const newColumn = {
				id: dbData.columns.length + 1,
				createdAt: new Date(),
				data
			};

			dbData.columns.push(newColumn);
			return newColumn;
		},
		delete: function(id) {
			dbData.columns.get(id).deletedAt = new Date();
			getColumnCards(id).map(card => {
				db.cards.remove(card.id);
			});
			return;
		},
		update: function(id, data) {
			const column = db.columns.get(id);
			column.data = {
				...column.data,
				...data
			};

			return column;
		}
	}
}

module.exports = db;