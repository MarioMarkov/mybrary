const mongoose = require('mongoose');

const authorsSchema = mongoose.Schema({
    name: {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('Author',authorsSchema)