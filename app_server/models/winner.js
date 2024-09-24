const mongoose = require('mongoose');

const winnerSchema = new mongoose.Schema({
    name: String,
    auctionItem: String,
    bidAmount: Number,
    dateWon: Date
});

const Winner = mongoose.model('Winner', winnerSchema);

module.exports = Winner;
