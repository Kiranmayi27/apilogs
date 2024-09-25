const logging=require("log-to-file");

const log=(msg)=>{
    logging(msg, "./test.txt");
}

module.exports=log;