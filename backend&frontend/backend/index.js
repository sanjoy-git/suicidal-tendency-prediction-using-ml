const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const ML=require("./routers/ML");
const User=require("./routers/User");
const Doctors=require("./routers/Doctors");

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(ML);
app.use(User);
app.use(Doctors);

app.get("/",(req,res,next)=>{
  res.send("server is running");
})

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);