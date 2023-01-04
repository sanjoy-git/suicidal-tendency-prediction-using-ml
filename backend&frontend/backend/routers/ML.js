const express = require("express");
const brain = require("brain.js");
const router = express.Router();
const connection = require("../models/DB")


router.post("/predict", (req, res) => {

  const {
    value0,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    value13,
    value14,
    value15,
    login,
    userName
  }=req.body;
  

  const bodyData={
    mValue0:value0?70:0,                 // Have you tried suicide before ?
    mValue1:value1?65:0,                 // Do you get angry easily ?
    mValue2:value2?80:0,                  // Is your loved one dead ?
    mValue3:(+value3>15)?+value3:5,       // percentage of mental stress ?
    mValue4:(+value4>20)?+value4:6,       // How much of a job/financial problem or loss ?
    mValue5:(+value5>14)?+value5:5,       // How much is depression and other mental illnesses ?
    mValue6:(+value6>16)?+value6:5,       // Serious illness such as chronic pain ?
    mValue7:(+value7>20)?+value7:6,       // Criminal/legal problems ?
    mValue8:(+value8>15)?+value8:5,       // How much emotional or aggressive tendencies ?
    mValue9:(+value9>19)?+value9:5,       // Loss of relationships ?
    mValue10:(+value10>15)?+value10:7,       // Victim of bullying ?
    mValue11:(+value11>16)?+value11:5,       // Victim of discrimination ?
    mValue12:(+value12>15)?+value12:6,       // A victim of blackmail ?
    mValue13:(+value13>17)?+value13:5,       // Violence victimization and perpetration ?
    mValue14:(+value14>18)?+value14:6,       // Social isolation ?
    mValue15:(+value15>15)?+value15:5,       // Suicide clusters in communities ?
  }

  const {mValue0,mValue1,mValue2,mValue3,mValue4,mValue5,mValue6,mValue7,mValue8,mValue9,mValue10,mValue11,mValue12,mValue13,mValue14,mValue15}=bodyData;

  const net=new brain.NeuralNetwork();

  net.train([
    { input: { mValue1: 100, mValue2: 100, mValue2: 100,mValue2: 100, mValue5: 100, mValue6: 100, mValue7: 100,mValue8: 100, mValue9: 100, mValue10: 100, mValue11: 100, mValue12: 100, mValue13: 100, mValue14: 100, mValue15: 100 }, output: { tendency: 1 } },
    { input: { mValue1: 50, mValue2: 50, mValue2: 50,mValue2: 50, mValue5: 50, mValue6: 50, mValue7: 50,mValue8: 50, mValue9: 50, mValue10: 50, mValue11: 50, mValue12: 50, mValue13: 50, mValue14: 50, mValue15: 50 }, output: { tendency: 1.5 } },
    { input: { mValue1: 0, mValue2: 0, mValue2: 0,mValue2: 0, mValue5: 0, mValue6: 0, mValue7: 0,mValue8: 0, mValue9: 0, mValue10: 0, mValue11: 0, mValue12: 0, mValue13: 0, mValue14: 0, mValue15: 0 }, output: { tendency: 0 } },
  ]);

  let prediction=net.run(bodyData);

  let tendency=0;
  
  for (const key in bodyData) {
    tendency+=bodyData[key];
  }

  prediction = {
    tendency:tendency/15
  }

  if(login=="true"){
    const sqlSelectQuery="SELECT `prediction` FROM `user` WHERE user_name='"+userName+"'";
    connection.query(sqlSelectQuery,(err,result)=>{
      if(err){
        res.status(500).json({
          Error:err,
          message:"Update Faild"
        })
      }
      else if(result[0]){
        const prePredict=JSON.parse(result[0].prediction);
        
        const predict={
          ten:prediction.tendency,
          time:new Date().toLocaleDateString()
        }

        prePredict.push(predict);

        const prePredictString=JSON.stringify(prePredict);

        const sqlUpdateQuery= "UPDATE user SET `prediction`='"+prePredictString+"'  WHERE `user_name`='"+userName+"' "
        connection.query(sqlUpdateQuery,(err)=>{
          if(err){
            res.status(200).json({
              err,
              message:"update Faild",
              alert:`${new Date().getTime()}`
            })
          }
          else{
            res.status(200).json({
              message:"update successfully",
              alert:`${new Date().getTime()}`,
              result:prediction
            })
          }
        });
      }
    })
  }
  else{
    res.status(200).json({
      message:"predict successfully",
      result:prediction
    })
  }

  // res.status(200).json({
  //   message:"predict successfully",
  //   result:predict
  // })
});

module.exports = router;