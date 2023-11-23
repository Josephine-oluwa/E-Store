import mongoose, { model } from "mongoose"

interface Product {
    title: string;
    image: string;
    imageID: string;
    cost: number;
    rating: number;
    QTYinStock: number;
    toggle: boolean;
    QTYPurchased: number
}

interface iProduct extends Product, mongoose.Document{}

const productModel = new  mongoose.Schema({
    title: {
        type: String
    }, 
    image: {
        type: String
    },
    imageID: {
        type: String
    },
    cost: {
        type: Number
    },
    rating: {
        type: Number
    },
    QTYinStock: {
        type: Number,
        default: 0
    },
    toggle: {
        type: Boolean,
        default: false 
    },
    QTYPurchased: {
        type: Number,
    }
},
{timestamps: true}
)

export default mongoose.model<iProduct>("product", productModel)