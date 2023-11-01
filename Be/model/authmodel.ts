import mongoose, { Mongoose } from "mongoose"

interface user {
    email: string;
    password: string;
    userName: string
}

interface iUser extends user, mongoose.Document{}


const authModel = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    userName: {

    }
},
{timestamps: true}
)
export default mongoose.model<iUser> ("iUser", authModel)