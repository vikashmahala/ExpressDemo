const express = require('express');
const hbs = require('hbs');

var app = express();
app.set('view engine' , 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partialViews');

//app.get('/' , (req, res) => {
//  res.send('Hello Express');
//});


app.get('/' , (req, res1)=>{
  //res1.send({
  //  name:'vikash',
  //  emailid: ['vikas@gmail.com' , 'suresh@gmail.com']
  //});
 res1.render('home.hbs' , {
   pageTitle: 'Home',
   welcomeMessage : 'welcome to my application',
   currentYear : new Date().getFullYear()
 })

});

app.get('/about' , (req , res) => {
  res.render('about.hbs' , {
    pageTitle : 'about',
    currentYear : new Date().getFullYear()
  });
})

app.listen(3000);
