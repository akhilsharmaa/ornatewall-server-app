const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const mongoURI =  process.env.MONOGO_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


router.get('/', (req, res) => {
  res.status(200).send({
    "message": "API"
  });
});


// Define a Schema for phone number submissions
const RecordModelSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: "NA"
  },
  label: {
    type: String,
    default: "new"
  },
  date: {
    type: Date,
    default: Date.now 
  }
});

const RecordModel = mongoose.model('Record', RecordModelSchema);

router.post('/submit', (req, res) => {

  const userPhoneNumber = req.headers.phone; // Get the phone number 

  if (!userPhoneNumber || userPhoneNumber.length !== 10 || isNaN(userPhoneNumber)) {
    return res.status(402).send({
      "message": "Invalid phone number, please recheck your number."
    });
  }

  const newRecord = new RecordModel({
    phone: userPhoneNumber
  });

  // Save the submission to the database
  newRecord.save()
    .then(() => res.status(200).send({
      "message": "Your phone number submitted successfully, we will get in touch shortly."
    }))
    .catch(err => {
      console.error("Error saving to MongoDB", err);
      res.status(500).send({
        "message": "Failed to submit phone number."
      });
    });
});
 
router.get('/records', async (req, res) => {

  const userDataLabel = req.headers.label;  

  try{
      
      let result = [];

      if(userDataLabel){
        result = await RecordModel.find(
          {label: userDataLabel} // label
        )
      }else {
        result = await RecordModel.find()
      }

      return res.status(200).send({
        "message": "Successfully fetched data", 
        'data' : result
      });

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
