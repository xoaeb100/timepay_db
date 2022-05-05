import mongoose from 'mongoose';
const {
    Schema
} = mongoose;

const CoOwnerSchema = new Schema({

    coOwner: [{
        fullName: {
            type: String,
            required: true
        },
        mobNo: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        },
    }]

})