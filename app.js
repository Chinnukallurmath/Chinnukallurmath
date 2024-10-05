const express = reqire("express");
const app = express();
const cookieparser = require("cookie-parser");

const ownerRouter = require("./routes/ownerRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const indeRouter = require("./routes/indexRouter");
const Git = require("./routes/git");
require("dotenv").config();
const path = require("path");

const db = require("./config/mongoose.connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(express.flash());
app.use(express.stetic(path.json(__dirname, "public")));
app.set("view engine", "html" );





app.use("/owner", ownerRouter);
app.use("/users", userRouter);
app.use("/product", productRouter);

express.Session({
    resave:false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
})





app.listen(3000);