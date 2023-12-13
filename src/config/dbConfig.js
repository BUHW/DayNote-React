const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://sa:pds2772@cluster0.nwqgmwv.mongodb.net/annotations?retryWrites=true&w=majority;'

const connections = mongoose.connect(dbConfig);

module.exports = connections;
