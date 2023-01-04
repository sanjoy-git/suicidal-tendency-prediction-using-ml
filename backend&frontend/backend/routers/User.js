const express = require("express");
const router = express.Router();
const connection = require("../models/DB");

router.post("/signup", (req, res) => {
  const {userName,password}=req.body;
  const sqlSelectQuery="SELECT `user_name` FROM `user` WHERE user_name='"+userName+"'";
  connection.query(sqlSelectQuery,(err,result)=>{
    if(err){
      res.status(500).json({
        Error:err,
        message:"Error"
      })
    }
    else if(result[0]){
      res.status(200).json({
        message:"please new userName use !"
      })
    }
    else{
      const prediction = '[{"ten":"0","time":"0"}]';
      const sqlInsertQuery="INSERT INTO `user`(`user_name`, `password`,`prediction`) VALUES ('"+userName+"','"+password+"','"+prediction+"')"
      connection.query(sqlInsertQuery,(err)=> {
        if (err){
          res.status(500).json({
            Error:err,
            message:"Error"
          })
        }
        else{
          res.status(200).json({
            message:"SignUp Successfully"
          });
        }
      });
    }
  })
});

router.post("/login", (req, res) => {
  const {userName,password}=req.body;
  const sqlSelectQuery="SELECT `user_name`,`password` FROM `user` WHERE user_name='"+userName+"'";
  connection.query(sqlSelectQuery,(err,result)=>{
    if(err){
      res.status(500).json({
        Error:err,
        message:"Error"
      })
    }
    else if(result[0]){
      if(result[0].password==password){
        res.status(200).json({
          message:"Login Successfully",
          userName
        })
      }
    }
    else{
      res.status(200).json({
        message:"userName not match"
      })
    }
  })
});

router.get("/analysis/:userName", (req,res) => {
  const sqlSelectQuery="SELECT `prediction` FROM `user` WHERE user_name='"+req.params.userName+"'";
  connection.query(sqlSelectQuery,(err,result)=>{
    if(err){
      res.status(500).json({
        Error:err,
        message:"Error"
      })
    }
    else if(result[0]){
      res.status(200).json({
        message:"get prediction",
        result:result[0].prediction
      })
    }
    else{
      res.status(200).json({
        message:"Something wrong"
      })
    }
  })
});



module.exports=router;