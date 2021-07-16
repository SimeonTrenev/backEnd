const express = require("express");
const mongoose = require("mongoose");
const mongoPath =
  "mongodb+srv://admin:12345@myfirstcluster.zbh03.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const bodyParser = require("body-parser");
const cors = require("cors");
// require("./models/Offers");
// require("./models/ConstructionTypes");
// require("./models/User");

const cookieParser = require("cookie-parser");
// const auth = require("./auth");

let app = express();

const port = process.env.PORT || 9000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(auth);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use((req, res, next) => {
  console.log(req.path);
  next();
});

// require("./routes/test")(app);

// app.post("/register", (req, res, next) => {
//   console.log("asd");
//   res.send("testa");
// });
app.post("/add-offer", (req, res, next) => {
  console.log(req.body);
  // res.send(req.body);
  res.send(req.body);
});

app.get("/", (req, res, next) => {
  res.send("asdasdasd as das");
});

app.listen(port, () => {
  console.log(`Server is lestening on port ${port} !`);
});

app.get("/offers", (req, res, next) => {
  res.send("Test");
});

const dbConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};
mongoose.connect(mongoPath, dbConnectionOptions, () => {
  console.log("connected");
});
