// create product mongoose model
//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        city: {
            type: String,
            trim: true,
        },
        state: {
            type: String,
            trim: true,
        },
        zip: {
            type: String,
            trim: true,
        },
        country: {
            type: String,
            trim: true,
        }
    },
}, {
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
}
);

const clientModel = mongoose.model('Client', clientSchema);
export default clientModel;