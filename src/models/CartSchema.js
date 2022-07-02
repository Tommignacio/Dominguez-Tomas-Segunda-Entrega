import mongoose from "mongoose";

export const cartSchema = new mongoose.Schema({
    // timestamp: { type: String },
    productos: [{ type: mongoose.Schema.Types.ObjectId, ref: "productos" }],
    cantidad: {
        type: Number,
        required: true,
    }
    // productos: [
    //     {
    //         producto: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: "productos"
    //         },
    //         cantidad: {
    //             type: Number,
    //             required: true,
    //             default: 1
    //         }
    //     }
    // ],
});