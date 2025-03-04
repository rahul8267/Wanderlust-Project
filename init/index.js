const mongoose = require("mongoose");

// Requirre Data
const initdata = require("./data.js");

// Require Model
const Listing = require("../models/listing.js");

const connectURL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then((res) => {
    console.log("connectoin Sucess! connect DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(connectURL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initdata.data = initdata.data.map((obj) => ({
    ...obj,
    owner: "67c5ac7c8924a73efef45d62",
  }));
  await Listing.insertMany(initdata.data);
  console.log("data was init...");
};

initDB();
