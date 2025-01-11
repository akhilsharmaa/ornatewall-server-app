// routes/index.js
const express = require('express');
const router = express.Router();
const RecordModel = require('../model/RecordModel'); 

router.get('/', (req, res) => {
  res.render('pages/admin/dashboard');
}); 
 

router.get('/inbox', async (req, res) => {

  try{
      const result = await RecordModel.find(
        {label: "inbox"}  
      );
      res.status(200).render('pages/admin/inbox', 
         {"result": result}
      );

  }catch(err){
    console.log(err);
    return res.status(500).send({
        "message": "Failed to fetch records, please try again later. ", 
        "error" : err
      }
    );
  }

}); 


router.get('/archived', async (req, res) => {

  try{
      const result = await RecordModel.find(
        {label: "archived"}  
      );
      res.status(200).render('pages/admin/archived', 
         {"result": result}
      );

  }catch(err){
    console.log(err);
    return res.status(500).send({
        "message": "Failed to fetch records, please try again later. ", 
        "error" : err
      }
    );
  }

}); 


module.exports = router;
