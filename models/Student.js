import { Schema, model} from 'mongoose';

// Create Schema
const StudentSchema = new Schema({
    panther_id: {
        type: String,
        // required: true
    },
    first_name: {
        type: String,
        // required: true
    },
    last_name: {
        type: String,
        // required: true
    },
    department: {
        type: String,
        // required: true
    },
    level: {
        type: String,
        // required: true
    },
    campus: {
        type: String,
        // required: true
    },
    degree: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    college: {
        type: String,
        // required: true
    },
    year: {
        type: String,
        // required: true
    },
    check_in: {
        type: Boolean,
        default: false
    }
});

const Student = model('student', StudentSchema );

export default Student;