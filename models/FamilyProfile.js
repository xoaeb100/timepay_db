import mongoose from 'mongoose';
const {
    Schema
} = mongoose;

const FamMemberSchema = new Schema({


    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    relation: {
        type: String,
        required: true
    },

    mobNo: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    bloodGrp: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },


    file: {
        type: String,
        required: true
    },


});