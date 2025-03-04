const express = require("express");

const PORT = 3000;

const app = express();

app.use(express.json());



app.get("/", (req,res)=>{
    res.send("backendca1");
})

app.post('/user' , (req, res) => {
        const {email,password} = req.body;
        if (!email) {
            return res.status(400).json({message : "email cannot be empty"});
        }
        else if (!password) {
            return res.status(400).json({message : "password cannot be empty"});
        }
        else {
            return res.status(200).json({message : "successful"})
        }
    })



app.listen(PORT ,() => {
    console.log(`server is running on http://localhost:${PORT}`)}
);