import pincode from "../model/pincode.js";
import encrypt from "encryptjs";

export const pincoderegister = async (req,res) => {
    try{

        const {name,email,password,pin,number,address,pancard} = req.body
        var secretkey ="apple";
        var plaintext = password;
        var plaintextforpin = pin;
        var ciphertext = encrypt.encrypt(plaintext,secretkey,256);
        var ciphertextforpin = encrypt.encrypt(plaintextforpin,secretkey,256);
        
        const user = await pincode.find({email}).exec();
        const pincodes = new pincode
        ({
            name:name,
            email:email,
            password:ciphertext,
            pin:ciphertextforpin,
            number:number,
            address:address,
            pancard:pancard
        }) 
        await pincodes.save();
        return res.send("Registration successful")
    }catch(error)
    {
        return res.send(error)
    }
}


export const updateNumber = async (req,res) =>{
    try{
        const {id,number} = req.body;

        const response =  await pincode.findOneAndUpdate({_id:id},{number:number}).exec();

        return res.send("Number is Updated");
    }
    catch(error)
    {
        return res.send(error)
    }
}


export const updateAddress = async (req,res) =>{
    try{
        const {id,address} = req.body;

        const response =  await pincode.findOneAndUpdate({_id:id},{address:address}).exec();

        return res.send("Address is Updated");
    }
    catch(error)
    {
        return res.send(error)
    }
}

export const updatepancard = async (req,res) =>{
    try{
        const {id,pancard} = req.body;

        const response =  await pincode.findOneAndUpdate({_id:id},{pancard:pancard}).exec();

        return res.send("Pancard is Updated");
    }
    catch(error)
    {
        return res.send(error)
    }
}
