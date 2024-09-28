const router = require("express").Router();
const log=require("../utils/logging");

router.get("/",(req,res)=>{
    log(`this is a ops route`);
    res.json({msg:"ops route"});
});

router.post("/withdraw", (req,res)=>{
    try {
        const {id="",name="",status="",msg=""}=req.body;
        log(`${id} ${name} ${status} withdraw ${msg}`);
        res.json({msg: "withdraw route"});
    } catch(err) {
        res.json({msg: `something went wrong : ${err.message}`});
    }
});

router.post("/balance_enquiry", (req,res)=>{
    try {
        const {id="",name="",status="",msg=""}=req.body;
        log(`${id} ${name} ${status} balance_enquiry ${msg}`);
        res.json({msg: "balance route"});
    } catch(err) {
        res.json({msg: `something went wrong : ${err.message}`});
    }
});

router.post("/signup", (req,res)=>{
    try {
        const {id="",name="",status="",msg=""}=req.body;
        log(`${id} ${name} ${status} signup ${msg}`);
        res.json({msg: "signup route"});
    } catch(err) {
        res.json({msg: `something went wrong : ${err.message}`});
    }
});

router.post("/pin_change", (req,res)=>{
    try {
        const {id="",name="",status="",msg=""}=req.body;
        log(`${id} ${name} ${status} pin_change ${msg}`);
        res.json({msg: "ping change route"});
    } catch(err) {
        res.json({msg: `something went wrong : ${err.message}`});
    }
});

router.post("/transfer_money", (req,res)=>{
    try {
        const {id="",name="",status="",msg=""}=req.body;
        log(`${id} ${name} ${status} transfer_money ${msg}`);
        res.json({msg: "transfer money route"});
    } catch(err) {
        res.json({msg: `something went wrong : ${err.message}`});
    }
});

module.exports=router;
