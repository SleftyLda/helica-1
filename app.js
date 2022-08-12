const { render } = require('ejs');
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require('mongoose');

dotenv.config({ path: './.env'});

const app = express();

const publicDirectory = path.join(__dirname, '/public');
app.use(express.static(publicDirectory));

// View engine setup
app.set('view engine', 'ejs');

//Data parsing
app.get("/", (req,res) => {
    res.render("index");
});

app.get("/contacts", (req,res) => {
    res.render("contact");
});

app.get("/sustainability", (req,res) => {
    res.render("sustainability");
});

app.use(express.json());

app.use(express.urlencoded({
    extended:false
}))

app.listen(5000, () => {
    console.log("Server started on port 5000");
})

// DB connection
mongoose
  .connect(process.env.MONGO_URI, {useNewUrlParser: true})
  .then(() => console.log('DB connected!'))
  .catch(err => console.error(err))
  
const trackingSchema = {
  customer: {Type: String},
  workId: {Type: String},
  date0: {Type: Date},
  date1: {Type: Date},
  date2: {Type: Date},
  date3: {Type: Date},
  date4: {Type: Date},
  date5: {Type: Date},
  phase: {Type: Number},
  photoLink: {Type: String},
  workName: {Type: String},
  trees: {Type: Number},
}

const tracking = mongoose.model('progressTracking', trackingSchema, 'progressTracking');

let id;
app.get('/tracking/:id', async function(req,res){
  id = req.params.id.toString();

  let process = await tracking.findById(id);

  res.render('tracker', { tracking: process })
})

app.get('/', (req, res) => {
  res.render('tracker');
})
