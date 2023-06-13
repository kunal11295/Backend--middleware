import pincode from "../model/pincode.js";
import encrypt from "encryptjs";
import { response } from "express";

        export const authpincode = async (req,res,next) =>{
        try{
        const {name,email,password,pin,number,address,pancard} = req.body
        if(!name) return res.send("name is required");
        if(!email) return res.send("email is required");
        if(!password) return res.send("password is required");
        if(!pin) return res.send("pin is required");
        if(!number) return res.send("number is required");
        if(!address) return res.send("address is required");
        if(!pancard) return res.send("pancard is required");

        if(password < 8)
        {
            return res.send("password is less than 8 charcter");            
        }
        const response = await pincode.find({email:email}).exec();
        if(response.length)
        {
            return res.send("email already register")

        }
        next();
        }catch(error)
        {
            return res.send(error)
        }
        }


        
export const authpin = async (req,res,next) =>
{
    try{
        const {_id,pin} = req.body;
        if(!_id) return res.send("email is required")
        if(!pin) return res.send("pin is required")

        var secrectkey = "apple"
        const response = await pincode.find({_id}).exec();

        var decipher = encrypt.decrypt(response[0].pin,secrectkey,256)
        console.log(decipher);

        if( decipher == pin)
        {
           next();
        }
        else
        {
            return res.send("PIN is Wrong")
        }
    }catch(error)
    {
        return res.send(error)
    }
}

