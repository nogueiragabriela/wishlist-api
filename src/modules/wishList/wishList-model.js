// create product mongoose model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishListSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const wishListModel = mongoose.model('wishList', wishListSchema);

module.exports = wishListModel;