const router = require("express").Router();
const log=require("../utils/logging");

router.get("/",(req,res)=>{
    log({msg:"ops route"});
    res.json({msg:"ops route"});
});

router.get("/withdraw", (req,res)=>{
    log({msg:"ops route"});
    res.json({msg: "withdraw route"});
});

router.get("/balance_enquiry", (req,res)=>{
    log({msg:"balance enquiry"});
    res.json({msg: "balance route"});
});

router.get("/signup", (req,res)=>{
    log({msg:"signup route"});
    res.json({msg: "signup route"});
});

router.get("/pin_change", (req,res)=>{
    log({msg:"pin change"});
    res.json({msg: "ping change route"});
});

router.get("/transfer_money", (req,res)=>{
    log({msg:"transfer money"});
    res.json({msg: "transfer money route"});
});

module.exports=router;