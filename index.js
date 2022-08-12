import express from "express";
// var cors = require('cors');
import cors from 'cors';
import bodyParser from "body-parser";

import Connection from "./connection/db.js";
import Route from "./routes/Route.js";
import DefaultData from "./default.js";

const app=express();
const PORT=8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // to parse spaces & other stuff in url to backend
app.use(bodyParser.json({ extended: true })); //json ko bhi parse karna hai bro
app.use('/', Route);


Connection();

app.listen(PORT , ()=>{
console.log(`Server running on port ${PORT}...`);
});

DefaultData();