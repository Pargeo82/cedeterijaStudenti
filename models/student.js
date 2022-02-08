import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';

const colorValidator = (v) => (/^#([0-9a-f]{3}){1,2}$/i).test(v)

const StudentSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    colorpicker: {
        type: String,
        validator: [colorValidator, 'Invalid Color'],
        required: true,
    },
    textColor: {
        type: String,
        enum: ['white', 'black'],
        required: true
    }
});

StudentSchema.plugin(passportLocalMongoose);

export default mongoose.model('Student', StudentSchema);