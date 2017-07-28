'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ListSchema = new Schema({
    title: String,
    listCreatedAt: { type: Date, default: Date.now },
    listId: Number,
    items: Array
});

module.exports = mongoose.model('ShoppingList', ListSchema);