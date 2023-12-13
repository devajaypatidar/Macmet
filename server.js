
const express = require('express')
const app = express()
const port = process.env.PORT || 8001;

app.set('view engine', 'ejs');
app.use(express.static("public"));

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
  res.sendFile(__dirname+'/team.html');
})

app.get('/service', (req, res) =>{
  res.sendFile(__dirname+'/service.html');
})

app.get('/carrier',(req, res)=>{
  res.sendFile(__dirname+'/carrier.html');
});

app.get('*', function(req, res){
  res.status(404).sendFile(__dirname+'/404.html');
})


app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})