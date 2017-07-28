'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ListEntrySchema = new Schema({
    itemName: String,
    order: Number,
    statusIsDone: Boolean
});

module.exports = mongoose.model('ListEntry', ListEntrySchema);