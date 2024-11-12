const router = require("express").Router();
const log=require("../utils/logging");
const sync=require("../utils/sync");

router.get("/",(req,res)=>{
    log(`this is a ops route`);
    res.json({msg:"ops route"});
});

router.post("/withdraw", (req,res)=>{
    try {
        const {id="",name="",status="",msg=""}=req.body;
        log(`withdraw, ${id}, ${name}, ${status}, message:${msg}`);
                sync();
            res.json({msg: "withdraw route"});
    } catch(err) {
        res.json({msg: `something went wrong : ${err.message}`});
    }
});

router.post("/balance_enquiry", (req,res)=>{
    try {
        const {id="",name="",status="",msg=""}=req.body;
        log(`balance_enquiry, ${id}, ${name}, ${status}, message:${msg}`);
                sync();
        res.json({msg: "balance route"});
    } catch(err) {
        res.json({msg: `something went wrong : ${err.message}`});
    }
});

router.post("/signup", (req,res)=>{
    try {
        const {id="",name="",status="",msg=""}=req.body;
        log(`signup, ${id}, ${name}, ${status}, message:${msg}`);
                sync();
        res.json({msg: "signup route"});
    } catch(err) {
        res.json({msg: `something went wrong : ${err.message}`});
    }
});

router.post("/pin_change", (req,res)=>{
    try {
        const {id="",name="",status="",msg=""}=req.body;
        log(`pin change, ${id}, ${name}, ${status}, message:${msg}`);
                sync();
        res.json({msg: "ping change route"});
    } catch(err) {
        res.json({msg: `something went wrong : ${err.message}`});
    }
});

router.post("/transfer_money", (req,res)=>{
    try {
        const {id="",name="",status="",msg=""}=req.body;
        log(`transfer_money, ${id}, ${name}, ${status}, message:${msg}`);
                sync();
        res.json({msg: "transfer money route"});
    } catch(err) {
        res.json({msg: `something went wrong : ${err.message}`});
    }
});

module.exports=router;
