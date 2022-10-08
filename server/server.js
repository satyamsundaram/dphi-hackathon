const express = require("express"); // middleware to create CRUD endpoints
const mongoose = require("mongoose"); // ODM to query mongodb
const routes = require("./routes/routes"); // endpoints and CRUD functions to perform
const cors = require("cors"); // allow resource sharing to a different domain

const app = express(); // create an instance of express
app.use(express.json()); // accepts data in json; based on body-parser
app.use(express.urlencoded({ extended: true })); // accepts data in urlEncoded form
require("dotenv").config(); // imports contents of .env here
const clientURL = process.env.clientURL;
app.use(cors(clientURL)); // allow cors to this domain

const mongodbURL = process.env.MONGODB_URL;

mongoose.connect(mongodbURL); // connect db to this server
const db = mongoose.connection; // get instance of db

// check db connection status
db.on("error", (error) => console.log(error)); // db.on means connect to db
db.once("connected", () => console.log("Database connected.")); // db.once means run only one time

app.use("/api", routes); // app.use takes base endpoint and the contents of routes; now all endpoints will start from '/api'

// for google oauth
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./passport");

app.use(
  cookieSession({
    name: "google-outh-session",
    keys: ["key1", "key2"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: clientURL,
  }),
  (req, res) => {
    res.redirect(clientURL);
  }
);

app.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect(clientURL);
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`)); // listen on port for incoming requests to server
