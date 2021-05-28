const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
// const loginRouter = require('./routes/loginrouter')
require("dotenv").config();




const PORT= process.env.PORT || 3500;

app.use(cors());

// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/project`);

app.use(bodyParser.json());
// app.use('/api', loginRouter);


const Login = require("./models/login");
let Cprofile = require("./models/cprofile");
let Nroute = require("./models/nroute");
let Nbooking = require("./models/nbooking");
let feedback = require("./models/nfeedback");
let Nschedule = require("./models/nschedule");
let Nlocation = require("./models/Location");
let Bus= require("./models/Bus");


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

app.use("/api/bus", require("./routes/bus"));
app.use("/api/locations", require("./routes/location"));


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
                const payload = {
                  name: result.name,
                  email: result.email,
                  usetype: result.usetype
                };
              
                const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '2h' });
              
                // return resp.json({ token });
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

app.post('/api/addbus',async (req,res)=>{
// exports.create = async (req, res) => {
  const busExists = await Bus.findOne({ busNumber: req.body.busNumber });
  if (busExists)
    return res.status(403).json({
      error: "Bus is already added!"
    });

  if (req.file !== undefined) {
    const { filename: image } = req.file;

    //Compress image
    await sharp(req.file.path)
      .resize(800)
      .jpeg({ quality: 100 })
      .toFile(path.resolve(req.file.destination, "resized", image));
    fs.unlinkSync(req.file.path);
    req.body.image = "busimage/resized/" + image;
  }

  if (req.body.boardingPoints) {
    req.body.boardingPoints = req.body.boardingPoints.split(",");
  }
 
  if (req.body.droppingPoints) {
    req.body.droppingPoints = req.body.droppingPoints.split(",");
  }

  const bus = new Bus(req.body);

  // if (!checkDateAvailability(req.body.journeyDate)) {
  //   bus.isAvailable = false;
  // }

  bus.owner = req.ownerauth;

  await bus.save();

  res.json(bus);

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

router.get("/api/booking", async (req, resp) => {
  try{
    Nbooking.find({})
  .exec((err,booking)=>{
     if(err){
      req.json( {message : "No data found"});
      resp.redirect("/home");
     }else{
         resp.json(booking);
     }
  });
  }
  catch(error){
      return resp
      .status(400)
      .json({ error: err, message: "Error fetching data" });
  }
});

router.get("/api/routes", async (req, resp) => {
  try{
    Nroute.find({})
  .exec((err,routes)=>{
     if(err){
      req.json( {message : "No data found"});
      resp.redirect("/home");
     }else{
         resp.json(routes);
     }
  });
  }
  catch(error){
      return resp
      .status(400)
      .json({ error: err, message: "Error fetching data" });
  }
});


router.get("/api/schedule", async (req, resp) => {
  try{
    Nschedule.find({})
  .exec((err,schedule)=>{
     if(err){
      req.json( {message : "No data found"});
      resp.redirect("/home");
     }else{
         resp.json(schedule);
     }
  });
  }
  catch(error){
      return resp
      .status(400)
      .json({ error: err, message: "Error fetching data" });
  }
});


app.post('api/newschedule',(req,res)=>{
  const nschedule = new Nschedule({
    routeid:req.body.routeid,
    source:req.body.source,
    destination:req.body.destination,
    type:req.body.type,
    starttime:req.body.starttime,
    endtime:req.body.endtime,
    stop:req.body.stop,
    time:req.body.time,
    fare:req.body.fare
  })
  nschedule.save()
  .then(data=>{
      console.log(data)
      res.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
})

router.get("/api/location", async (req, resp) => {
  try{
    Nlocation.find({})
  .exec((err,location)=>{
     if(err){
      req.json( {message : "No data found"});
      resp.redirect("/home");
     }else{
         resp.json(location);
     }
  });
  }
  catch(error){
      return resp
      .status(400)
      .json({ error: err, message: "Error fetching data" });
  }
});

app.post('/api/addlocation',(req,resp)=>{
  const nlocation = new Nlocation({
    place:req.body.place,
    district:req.body.district
  })
  nlocation.save()
  .then(data=>{
      console.log(data)
      resp.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
})

router.get("/api/userdata", async (req, resp) => {
  try{
    Login.find({})
  .exec((err,usersdata)=>{
     if(err){
      req.json( {message : "No users found"});
      resp.redirect("/home");
     }else{
         resp.json(usersdata);
     }
  });
  }
  catch(error){
      return resp
      .status(400)
      .json({ error: err, message: "Error fetching data" });
  }
});


router.put("/api/profileActivate", async (req, resp) => {
  try {
      console.log(req.body)
      const query = { "email": req.body.email };
      // Set some fields in that document
      const update = {
        "$set": {
          "status":req.body.action
        }
      };
      // Return the updated document instead of the original document
      const options = { returnNewDocument: true };
      return Login.findOneAndUpdate(query, update, options)
        .then(updatedDocument => {
          if(updatedDocument) {
            resp.status(200).json({ message: `Successfullly ${req.body.action}`});

            console.log(`Successfully updated document: ${updatedDocument}.`)
            resp.redirect("/admin/users");
          } else {
            resp.status(200).json({ message: `Unsuccessfullly ${req.body.action}`});
            console.log("No user found")
          }
          return updatedDocument
        })
        .catch(err => console.error(`Failed to find and update document: ${err}`))
      
  } catch (error) {
    return resp
      .status(400)
      .json({ error: error, message: "Error updating" });
  }
});

router.post("/api/profileGet", async (req, resp) => {
  try{
  Login.findOne({email:req.body.email})
  .exec((err,userdata)=>{
     if(err){
      req.json( {message : "user not found",});
      resp.redirect("/");
     }else{
         resp.json(userdata);
     }
  });
  }
  catch(error){
      return resp
      .status(400)
      .json({ error: err, message: "Error fetching data" });
  }
});
router.put("/api/profileEdit", async (req, resp) => {
  try {
      console.log(req.body)
  if(req.body.password !== "")
  {
      salt = await bcrypt.genSalt(10);
      passvalue = await bcrypt.hash(req.body.password, salt);
  }
 else if(req.body.password ==="")
   {
       passvalue=req.body.hash;
    }

      const query = { "email": req.body.email };
      // Set some fields in that document
      const update = {
        "$set": {
          "name": req.body.name,
          "phone": req.body.phone,
          "password": passvalue,
          "city": req.body.city,          
        }
      };
      // Return the updated document instead of the original document
      const options = { returnNewDocument: true };
      return Login.findOneAndUpdate(query, update, options)
        .then(updatedDocument => {
          if(updatedDocument) {
            resp.status(200).json({ message: "profile updated"});

            console.log(`Successfully updated document: ${updatedDocument}.`)
          } else {
            resp.status(200).json({ message: "profile not updated"});
            console.log("No document matches the provided email.")
          }
          return updatedDocument
        })
        .catch(err => console.error(`Failed to find and update document: ${err}`))
      
  } catch (error) {
    return resp
      .status(400)
      .json({ error: error, message: "Error updating" });
  }
});

app.post('/api/feedback',(req,resp)=>{
  const nfeedback = new feedback({
    name:req.body.name,
    email:req.body.email,
    type:req.body.type,
    msg:req.body.msg
  })
  nfeedback.save()
  .then(data=>{
      console.log(data)
      resp.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
});


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


