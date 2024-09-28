const router = require("express").Router();
const log=require("../utils/logging");

router.get("/",(req,res)=>{
    log(`this is a ops route`);
    res.json({msg:"ops route"});
});

router.post("/withdraw", (req,res)=>{
    const {id="",name="",status="",msg=""}=req.body;
    log(`${id} ${name} ${status} withdraw ${msg}`);
    res.json({msg: "withdraw route"});
});

router.post("/balance_enquiry", (req,res)=>{
    const {id="",name="",status="",msg=""}=req.body;
    log(`${id} ${name} ${status} balance_enquiry ${msg}`);
    res.json({msg: "balance route"});
});

router.post("/signup", (req,res)=>{
    const {id="",name="",status="",msg=""}=req.body;
    log(`${id} ${name} ${status} signup ${msg}`);
    res.json({msg: "signup route"});
});

router.post("/pin_change", (req,res)=>{
    const {id="",name="",status="",msg=""}=req.body;
    log(`${id} ${name} ${status} pin_change ${msg}`);
    res.json({msg: "ping change route"});
});

router.post("/transfer_money", (req,res)=>{
    const {id="",name="",status="",msg=""}=req.body;
    log(`${id} ${name} ${status} transfer_money ${msg}`);
    res.json({msg: "transfer money route"});
});

module.exports=router;
