const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: './.env'});

const app = express();

const publicDirectory = path.join(__dirname, '/public');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

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