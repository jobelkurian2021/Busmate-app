const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
// const loginRouter = require('./routes/loginrouter')




const PORT= process.env.PORT || 3500;

app.use(cors());

// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/project`);

app.use(bodyParser.json());
// app.use('/api', loginRouter);


let Login = require("./models/login");

mongoose.connect("mongodb://127.0.0.1:27017/project", {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true 
    }, (err) => {
        if (!err) { console.log('Successfully Connected in MongoDB') }
        else { console.log('Syntax Error: ' + err) }
});

const router = express.Router();

const connection = mongoose.connection;

connection.once("open", function() {
    console.log("Connection with MongoDB was successful");
  });

// const port = process.env.PORT || 5000;

app.use("/", router);

app.listen(PORT,function(){
    console.log('App is listening on port ' + PORT);
});

router.route("/getData").get(function(req, res) {
Login.find({}, function(err, result) {
    if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
});

app.post('/send-data',(req,res)=>{
  const login = new Login({
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      pass:req.body.pass,
      password:req.body.passord,
      city:req.body.city

  })
  login.save()
  .then(data=>{
      console.log(data)
      res.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
})

app.post('/api/signup',(req,res)=>{
  const login = new Login({
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      password:req.body.passord,
      city:req.body.city,
      state:req.body.city,
      usetype:req.body.city
  })
  login.save()
  .then(data=>{
      console.log(data)
      res.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
})

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});
router.get("/testApi", function(req, res, next) {
  res.send("API is working properly");
});

// Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });


