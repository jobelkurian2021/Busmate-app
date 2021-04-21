const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");

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


const Login = require("./models/login");
let Cprofile = require("./models/cprofile");
let Nroute = require("./models/nroute");
let Nbooking = require("./models/nbooking")

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

app.post('/api/signup',async (req,resp)=>{
  const salt = await bcrypt.genSalt(10);
  const securepassword = await bcrypt.hash(req.body.password, salt);
  const login = new Login({
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      password: securepassword,
      state:req.body.state,
      city:req.body.city,
      usetype:req.body.usetype
  })
  login.save()
  .then(data=>{
      console.log(data)
      // res.send(data)
      resp.status(200).json({ message: "user registered"});
  })
  .catch((error) => {
    resp.status(400).json({ error: error, message: " error " });
  });
});

app.post("/api/signin", async (req, resp) => {
  try {
    Login
      .findOne({ email: req.body.email })
      .then((Login) => {
        if (Login) {
          bcrypt.compare(
            req.body.password,
            Login.password,
            (err, result) => {
              if (err) {
                resp.status(200).json({ error: err, message: "server error" });
              }
              if (result) {
                resp.status(200).json({
                  message: "validuser",
                  email: req.body.email,
                  data:Login,
                });
                console.log("success login");
              }
              if (!result) {
                resp.status(200).json({
                  message: "invalid password",
                });
                console.log("invalid password");
              }
            }
          );
        } else {
          resp.status(200).json({
            message: "invalid Email",
          });
          console.log("invalid Email");
        }
      });
  } catch (error) {
    console.log("email error");
    return resp
      .status(400)
      .json({ error: err, message: "email and password needed" });
  }
});


app.post('/api/cprofile',(req,res)=>{
  const cprofile = new Cprofile({
      name:req.body.name,
      email:req.body.email,
      site:req.body.site,
      address:req.body.address,
      phone:req.body.phone,
      rid:req.body.rid,
      acc:req.body.acc,
      btype:req.body.btype,
      busno:req.body.busno
  })
  cprofile.save()
  .then(data=>{
      console.log(data)
      res.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
})

app.post('/api/newroute',(req,res)=>{
  const nroute = new Nroute({
    source:req.body.source,
    destination:req.body.destination,
    type:req.body.type,
    time:req.body.time,
    fare:req.body.fare
  })
  nroute.save()
  .then(data=>{
      console.log(data)
      res.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
})

app.post('/api/newbooking',(req,res)=>{
  const nbooking = new Nbooking({
    email:req.body.email,
    phone:req.body.phone,
    source:req.body.source,
    destination:req.body.destination,
    date:req.body.date,
    time:req.body.time,
    no:req.body.no,
    accomodation:req.body.accomodation,
    seatno:req.body.seatno,
    name:req.body.name,
    sex:req.body.sex,
    age:req.body.age
  })
  nbooking.save()
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


