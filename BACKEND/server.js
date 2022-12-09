const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(express.json());
//app.use(cors({origin:true,credentials: true}));



const PORT = process.env.PORT || 8070;

//Edit by kulanaka(cookie parser and cors added)


app.use(cookieParser());
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, () => {
    useCreateIndex: true;
    useNewUrlParser: true;
    useUnifiedTopology: true;
    useFindAndModify: true;
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection establishment is successful!!!");
});
const cartRouter = require("./routes/cart.js");
app.use("/cart", cartRouter);

//Add the routes here.
const memberRouter = require("./routes/members.js");

app.use("/Member",memberRouter);

const materialRouter = require("./routes/Materials.js");
app.use("/material", materialRouter);

const itemRouter = require("./routes/ClothingItems.js");
app.use("/item", itemRouter);



const employeeRouter = require("./routes/employee.js");
app.use("/employee",employeeRouter);

const salaryRouter = require("./routes/salary.js");
app.use("/salary",salaryRouter);

const attenRouter = require("./routes/attendance.js");
app.use("/attendance",attenRouter);

// finance related routes.
const expenseRouter = require("./routes/expense.js");
app.use("/expense", expenseRouter);

//supplier mng related routes
const supplierRouter =require("./routes/suppliers.js");
app.use("/supplier",supplierRouter);

const stockorderRouter =require("./routes/stockorders.js");
app.use("/stockorder",stockorderRouter);


///changew

//Add the modules here.

//delivery related routes.
const driverRouter = require("./routes/driver-routes.js");
const deliveryRouter = require("./routes/deliveryroute.js");
app.use("/drivers",driverRouter);
app.use("/delivery",deliveryRouter);


app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});
