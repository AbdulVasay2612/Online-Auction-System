const mongoose = require('mongoose');
const Winner = require('../models/winner');  // Assuming you have a Winner model

const AW = (req, res) => {
    Winner.find({}, (err, winners) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error retrieving auction winners');
        } else {
            res.render('auctionwinner', { title: 'Auction Winners', winners });
        }
    });
};

module.exports = {
    AW
};
