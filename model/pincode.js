import mongoose from "mongoose";
import { Schema } from "mongoose";

const pincode = new Schema
({
    name:String,
    email:String,
    password:String,
    pin:String,
    number:Number,
    address:String,
    pancard:String

})

export default mongoose.model("pincode",pincode);