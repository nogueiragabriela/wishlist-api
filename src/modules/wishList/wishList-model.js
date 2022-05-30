// create product mongoose model
import mongoose from 'mongoose';

const { Schema } = mongoose;

const wishListSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true,
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,

    }],
    description: {
        type: String,
    },
    timestamps: {
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        }
    }  
});

const wishListModel = mongoose.model('wishList', wishListSchema);
export default wishListModel;