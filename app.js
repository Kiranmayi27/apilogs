// lib imports
const express = require("express");

// createing vars
const app = express();

// PORT
const PORT = process.env.PORT || 3001;

// adding middlewares 
app.use(express.json());

// operations route
app.use("/", require("./routes/operations"));

// default route
app.use((req,res)=>{
    res.status(404).json({
        msg: "route doesn't exist or not found"
    })
})

// app to listen to port
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})
