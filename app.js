const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {

    let today = new Date();
    let currentDay = today.getDay();

    let options = {
        weekday: "long",
        // year: "numeric",
        month: "long",
        day: "numeric"
    };

    let day = today.toLocaleDateString("en-US", options);


    res.render("list", { kindOfDay: day, newListItems: items });
});


app.post("/", function (req, res) {
    let item = req.body.enterInfo;
    items.push(item);

    res.redirect("/");
})

app.listen(3000, function (req, res) {
    console.log("Server started on port 3000");
});