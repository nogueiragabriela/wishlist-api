import clientModel from "../client/client-model.js";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://jessycipriano:ukWx1LFDTT75LGSZ@apisdatabase.udwbb.mongodb.net/wishlist-api?retryWrites=true&w=majority')

 class LoginRepository {
    async getByEmail(email) {
        return await clientModel.findOne({'email':email}).select(' email password');
    }
}

export default LoginRepository;