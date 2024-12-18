const express = require("express");
const app = express();
const path = require('path');
 
const port = process.env.PORT || 3000;
 



console.log('Views directory:', path.join(__dirname, 'views'));




//set view engin and path of view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended:  true }));
app.use(express.json());
app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).render("error", { message: err.message });
});



 


app.get('/', (req, res) => {
    console.log("req received from basic page");
    
    res.render('home');
});


app.get('/lecture', (req, res) => {
    // console.log("req received from lecture page");
    
    res.render( 'lecture');
});



app.get('/note', (req, res) => {
    // console.log("req received from basic page");
    
    res.render( 'note');
});



app.get('/previous', (req, res) => {
    // console.log("req received from basic page");
    
    res.render('previous');
});










app.listen(port, () => {
    console.log(`server is listening port no. is ${port}`);
})

