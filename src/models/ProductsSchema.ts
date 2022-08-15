import mongoose from "mongoose";

export const ProductsSchema = new mongoose.Schema({
    productId: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true}
}

);

ProductsSchema.index({productId: 1}, { unique: true});
