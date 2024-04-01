import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
    product:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required : true
    },
    quantity:{
        type : Number,
        required : true
    }
});


const orderSchema = new mongoose.Schema({
    orderPrice :{
        type : Number,
        required : true
    },
    customer:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    orderItems :{
        type : [OrderItemSchema],
        required : true
    },
    adress : {
        type : String,
        required : true
    },
    status:{
        type : String,
        required : true,
        enum : ["pending","completed","cancelled"],
        default : "pending"
    }
},{timestamps : true});

export const Order = mongoose.model("Order",orderSchema);
