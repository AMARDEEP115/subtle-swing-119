const express = require("express");
const { Router } = require("express");

const WOMEN = require("../models/women.model");

const womenControll = Router();

womenControll.get("/", async (req, res) => {
  // console.log('in')
  const { sortFilter } = req.query;
  let data;
  if (sortFilter) {
    if (sortFilter == "asc") {
      data = await WOMEN.find()
        .sort({ Price: 1 })
        .collation({ locale: "en_US", numericOrdering: true });
    } else if (sortFilter == "desc") {
      data = await WOMEN.find()
        .sort({ Price: -1 })
        .collation({ locale: "en_US", numericOrdering: true });
    } else {
      data = await WOMEN.find({ color: sortFilter });
    }
  } else {
    data = await WOMEN.find();
  }

  res.send(data);
});

womenControll.get("/productdetails/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const data = await WOMEN.find({ _id: id });
  res.status(200).send(data);
});

womenControll.post("/insert", (req, res) => {
  const { Image, Brand_Name, Price, color } = req.body;

  const data = WOMEN.create({
    Image,
    Brand_Name,
    Price,
    color,
  });

  res.status(200).send("Data Added");
});

module.exports = {womenControll};