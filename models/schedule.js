import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    workDate: {
        type: String,
        required: true
    },
    workHour: [{
        start: {
            type: Number,
            required: true
        },
        end: {
            type: Number,
            required: true
        }
    }],
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'student'
    }]
});

export default mongoose.model('Schedule', ScheduleSchema);