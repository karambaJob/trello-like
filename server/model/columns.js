const mongoose = require("mongoose");

const cardsSchema = mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    deletedAt: Date,
    data: {
        name: { type: String, default: 'New card' },
        desc: { type: String, default: 'new desc' }
    },
});

const columnsSchema = mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    data: {
        name: { type: String, default: 'New column' },
        order: { type: Number, min: 1 }
    },
    cards: [cardsSchema]
});

const Columns = mongoose.model("Columns", columnsSchema);

module.exports = {
    Columns,
};

