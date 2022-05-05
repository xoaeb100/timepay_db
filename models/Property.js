import mongoose from 'mongoose';
const {
    Schema
} = mongoose;

const PropertySchema = new Schema({



    flatNo: {
        type: Number,
        required: true
    },
    wing: {
        type: String,
        required: true
    },
    file: {
        type: String
    }
});