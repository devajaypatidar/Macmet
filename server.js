
const express = require('express')
const app = express()
const port = process.env.PORT || 8001;
const mongoose = require('mongoose');
const db = require('./config/database');
const Intern = require('./models/intern');
const bodyParser = require('body-parser');
const certController = require('./controllers/certController');



app.set('view engine', 'ejs');
app.use(express.static("public"));

// Body parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) =>{
  res.sendFile(__dirname+'/index.html');});

  app.get('/index', (req, res) =>{
    res.redirect('/');
  })

app.get('/about', (req, res) =>{
  res.sendFile(__dirname+'/about.html');
})

app.get('/why', (req, res) =>{
  res.sendFile(__dirname+'/why.html');
})

app.get('/team', (req, res) =>{
  res.render('team');
})

app.get('/service', (req, res) =>{
  res.sendFile(__dirname+'/service.html');
})

app.get('/sitemap.xml', (req, res) => {
  res.sendFile(__dirname+'/sitemap.xml');
});


app.get('/ckeckcertificate',(req,res)=>{
  res.render("success");
});

app.post('/checkcertificate', certController.checkCertificate);


//adding certification routes
app.get('/addcertificate',certController.addingCertificate);
app.post('/addcertification', certController.addCertification);




app.get('*', function(req, res){
  res.status(404).sendFile(__dirname+'/404.html');
})





app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})