import mongoose from 'mongoose';
const {
    Schema
} = mongoose;

const memberSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    propertyType: {
        type: String,
        required: true
    },
    Flatno: {
        type: Number,
        required: true
    },
    Wing: {
        type: String,
        required: true
    },
    Approvedby: {
        type: String,
        required: true
    },
    ApprovedOn: {
        type: Date,
        required: true
    },
    PanNo: {
        type: Number,
        required: true
    },
    GSTNo: {
        type: Number,
        required: true
    },
    mobNo: {
        type: Number,
        required: true
    },
    landlineNo: {
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
    DateOfAnniversary: {
        type: Date,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    file: {
        type: String
    },
    file2: {
        type: String
    },
    file3: {
        type: String
    },




});