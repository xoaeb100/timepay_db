import mongoose from 'mongoose';
const {
    Schema
} = mongoose;

const BankLoanSchema = new Schema({


    loanApplicable: {
        type: Boolean,
        required: true
    },
    BankName: {
        type: String,
        required: true
    },
    loanLetterDate: {
        type: Date,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    LoanCancellationDate: {
        type: Date,
        required: true
    },
    file: {
        type: String
    },



});