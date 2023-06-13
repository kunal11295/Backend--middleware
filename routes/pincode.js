import express from "express";
import { pincoderegister, updateAddress, updateNumber, updatepancard } from "../controller.js/register.js";
import { authpincode } from "../middleware/authmiddle.js";


var router = express.Router();


router.post('/pincode-register',authpincode,pincoderegister)
router.post('/update-number',updateNumber)
router.post('/update-address',updateAddress)
router.post('/update-pancard',updatepancard)



export default router;