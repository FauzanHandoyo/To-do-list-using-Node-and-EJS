const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");
const port = 3000;

app.use(express.static("public"));
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

let newItems = [];
app.get("/", (req, res) => {
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let today  = new Date();
    let day = today.toLocaleDateString("en-US", options);
    res.render("main", {DaysOfCount: day, newListItem: newItems});
});

app.post("/", (req, res) =>{
    let newItem = req.body.ItemAdded;
    newItems.push(newItem);
    res.redirect("/")
});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
