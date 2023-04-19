var createError = require("http-errors");
var dotenv = require('dotenv').config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var BodyParser = require("body-parser");
var mongoose = require('mongoose')
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var bookingRouter = require("./routes/booking");
var extapi = require("./routes/extapi");
var admin = require("./routes/admin"); 
var app = express();

var compression = require("compression");
var helmet = require("helmet");

app.use(compression());
app.use(helmet());


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/booking", bookingRouter);
app.use("/extapi", extapi);
app.use("/admin",admin)

// DB Config
mongoose.set('strictQuery', false);
const db = process.env.MONGODB_URI || "";
// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

const port = process.env.PORT || 8000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
