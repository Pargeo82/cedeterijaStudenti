const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    month: Number,
    day: Number,
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'student'
    }]
});

module.exports = mongoose.model('Schedule', ScheduleSchema);