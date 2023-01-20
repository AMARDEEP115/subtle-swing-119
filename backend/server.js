require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {USER} = require("./models/user.model");
const app = express();
const port = process.env.URL
const { connection }= require("./configs/db");
const { default: mongoose } = require("mongoose");
app.use(express.json());


app.use(
    cors({
      origin: "*",
      credentials: true,
      optionSuccessStatus: 200,
    })
  );

const {userControll} = require("./controllers/user.controll"); // Login , Signup including Schema
const {menControll} = require("./controllers/men.controll");
const {womenControll} = require("./controllers/women.controll");
const {Authentication} = require("./middlewares/auth.middleware");
const {cartControll} = require("./controllers/cart.controll");






app.use('/user',userControll)
app.use('/men',menControll)
app.use('/women',womenControll)
app.use('/cart',Authentication,cartControll);
// app.use("/admin", admin, adminControll); // Users get API endPoint 


app.get("/", (req, res) => {
    res.send("homepage");
  });



  // Register 


// app.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   await bcrypt.hash(password, 8, async (err, hash) => {
//     if (err) {
//       return res.status(511).send("password not hashed");
//     }
//     const user = await USER.create({ name, email, password: hash });
//     return res.status(200).send({ mess: "Registred", user: user });
//   });
// });
  

// Login

// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     // console.log(email);
//     const user = await USER.findOne({ email });
//     if (!user) {
//       return res.status(404).send("Invalid User");
//     }
//     const hashed_pass = user.password;
  
//     await bcrypt.compare(password, hashed_pass, (err, result) => {
//       if (err) {
//         return res.status(511).send("bcryption failed");
//       }
//       if (result) {
//         const token = jwt.sign(
//           { email: user.email, userId: user._id },
//           process.env.TOKEN_KEY
//         );
//         res.send({
//           message: "login successful",
//           token: token,
//           email: email,
//           name: user.name,
//         });
//       } else {
//         res.send("Inavalid Password");
//       }
//     });
//   });

app.listen(4501, async()=>{
    try{
        await connection;
        console.log(`Connected to DB ${port}`)

    }catch(err){
        console.log(err);
        console.log("Error while connecting to DB");
    }
})