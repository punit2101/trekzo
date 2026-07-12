const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/trekzo";
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Hi i am root");
});

app.get("/listing", async (req, res) => {
  let samplelisting = new Listing({
    title: "My New Villa",
    description: "By the beach",
    price: 1200,
    location: "Calangute ,Goa",
    country: "India",
  });
  await samplelisting.save();
  res.send("Done");
});

app.listen(8080, () => {
  console.log("server is listening to 8080");
});
