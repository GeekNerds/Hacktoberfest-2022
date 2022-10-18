const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongojs');
const cors = require('cors');
const port = 5000;
const dbname = "bhautik";
const collection = ['bhautik'];
const multer = require('multer');

const app = express();
app.use(bodyParser.json());
app.use(cors());
var db = mongoose(dbname, collection);

app.get('/', function (req, res) {
    res.send("hello from server");
});

app.post('/addstud', function (req, res) {
    console.log(req.body);
    db.bhautik.save({
        Enrollment_No: req.body.Enrollmentno,
        Name: req.body.Name,
        Age:req.body.age,
        Birth_Date:req.body.Bod,
        Department:req.body.dept,
        Branch:req.body.branch,
        Result:req.body.result,
        Fees:req.body.fees
    })
    res.status(200).send({
        "message": "data received"
    });
});

// Get single employee
app.get('/read/:id',(req, res) => {
    db.bhautik.findOne({_id: mongoose.ObjectId(req.params.id)}, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
		//console.log(data);

        
      }
    })
  })

   // Update employee
app.put('/update/:id',(req, res, next) => {
    db.bhautik.update({_id: mongoose.ObjectId(req.params.id)}, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        
        console.log('Data updated successfully')
      }
    })
  })


// get user

app.get("/getuser",function(req,res){  
    db.bhautik.find(function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{               
                  res.json(data);
                  }  
          });  
  });


  //delete user
  app.route('/delete/:id').delete((req, res, next) => {
    db.bhautik.remove({_id: mongoose.ObjectId(req.params.id)}, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: "dele"
        })
      }
    })
  })

  const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, `${file.originalname}`)
    }
  })
  
const upload = multer({ storage: storage })
   
//let upload = multer({ dest: 'uploads/' })



  app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    console.log(file.filename);
    if (!file) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file);
  })

app.listen(port, function () {
    console.log("server started");
});
