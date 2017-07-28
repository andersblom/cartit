'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ListEntrySchema = new Schema({
    itemName: String,
    order: Number,
    statusIsDone: { type: Boolean, default: false }
});

const ListSchema = new Schema({
    title: String,
    listCreatedAt: { type: Date, default: Date.now },
    listId: Number,
    items: [ListEntrySchema]
});

const UserSchema = new Schema({
    username: String,
    isPro: Boolean,
    password: String,
    email: String,
    createdAt: { type: Date, default: Date.now }, //test purposes: 1501249604563
    lists: [ListSchema]
});

module.exports = mongoose.model('ListEntry', ListEntrySchema);
module.exports = mongoose.model('List', ListSchema);
module.exports = mongoose.model('User', UserSchema);
