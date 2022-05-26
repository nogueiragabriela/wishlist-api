// create product mongoose model
import mongoose from 'mongoose';

const { Schema } = mongoose;

const wishListSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    client_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clients',
        required: true,
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true,

    }],
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const wishListModel = mongoose.model('wishList', wishListSchema);

export default wishListModel;