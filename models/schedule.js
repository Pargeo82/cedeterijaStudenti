import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    month: Number,
    day: Number,
    workHour: [{
        start: Number,
        end: Number
    }],
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'student'
    }]
});

export default mongoose.model('Schedule', ScheduleSchema);