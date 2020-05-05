import { Schema, model} from 'mongoose';

// Create Schema
const StudentSchema = new Schema({
    panther_id: {
        type: String,
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    department: {
        type: String,
    },
    level: {
        type: String,
    },
    campus: {
        type: String,
    },
    degree: {
        type: String,
    },
    email: {
        type: String,
    },
    college: {
        type: String,
    },
    year: {
        type: String,
    },
    check_in: {
        type: Boolean,
        default: false
    }
});

const Student = model('student', StudentSchema );

export default Student;