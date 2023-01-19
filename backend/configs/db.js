require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.URL
const { default: mongoose } = require("mongoose");

// app.use(express.json());

// app.use(
//     cors({
//       origin: "*",
//       credentials: true,
//       optionSuccessStatus: 200,
//     })
//   );

const connection = mongoose.connect(port);
module.exports={connection}