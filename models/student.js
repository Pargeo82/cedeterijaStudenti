const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    workSched: [{
        type: Schema.Types.ObjectId,
        ref: 'schedule'
    }]
});

module.exports = mongoose.model('Student', StudentSchema);