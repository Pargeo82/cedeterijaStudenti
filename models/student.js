import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';


const StudentSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

StudentSchema.plugin(passportLocalMongoose);

export default mongoose.model('Student', StudentSchema);