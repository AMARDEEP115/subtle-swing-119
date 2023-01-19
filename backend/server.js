require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.URL
const { connection }= require("./configs/db");
const { default: mongoose } = require("mongoose");



const {userControll} = require("./controllers/user.controll");
// const {menControll} = require("./controllers/men.controll");
// const {womenControll} = require("./controllers/women.controller");
// const {Authentication} = require("./middlewares/auth.middleware");
// const {cartControll} = require("./controllers/cart.controller");


app.use(express.json());
app.use(
    cors({
      origin: "*",
      credentials: true,
      optionSuccessStatus: 200,
    })
  );


  




app.use('/user',userControll)
// app.use('/men',menControll)
// app.use('/women',womenControll)
// app.use('/cart',Authentication,cartControll);
// app.use("/admin", admin, adminControll); // Users get API endPoint 


app.get("/", (req, res) => {
    res.send("homepage");
  });
  

app.listen(4501, async()=>{
    try{
        await connection;
        console.log(`Connected to DB ${port}`)

    }catch(err){
        console.log(err);
        console.log("Error while connecting to DB");
    }
})