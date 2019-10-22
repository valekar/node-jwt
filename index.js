const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");

const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
env.config();

mongoose
  .connect(process.env.DB_CONNECT)
  .then(result => {
    //console.log(result);
    console.log("connected to db");
  })
  .catch(() => {});

app.use(express.json());

//Route middle
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(3000, () => console.log("Server up"));
