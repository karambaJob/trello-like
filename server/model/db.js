const {Columns} = require('./columns');
const db = {
	cards: {
		// TODO
	},
	columns: {
		list: function() {
			return Columns.find().exec();
		},
		create: function() {
			return new Columns({
				data: {
					name: 'Some new name'
				}
			}).save();
		},
		delete: function(id) {
			// TODO
		},
		update: function(id, data) {
			return Columns.updateOne({_id: id}, {data: data});
		}
	}
}

module.exports = db;