'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ShoppingListItem = new Schema({
    itemName: String,
    order: Number,
    statusIsDone: { type: Boolean, default: false }
});

const ListSchema = new Schema({
    title: String,
    listCreatedAt: { type: Date, default: Date.now },
    items: [ShoppingListItem]
});

const UserSchema = new Schema({
    username: String,
    isPro: Boolean,
    password: String,
    email: String,
    createdAt: { type: Date, default: Date.now }, //test purposes: 1501249604563
    lists: [ListSchema]
});

const User = mongoose.model('User', UserSchema);

module.exports.User = User;
