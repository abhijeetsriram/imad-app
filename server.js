var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleone = {
title:'article-one i abhijeetsriram'
heading:'Article one'
date:'August 6,2017'
content:`This should be my first article whose content is displayed here. This should be my first article whose content is displayed here.
       </div>
       <p>
          This should be my first article whose content is displayed here.This should be my first article whose content is displayed here.This should be my first article
           whose content is displayed here. This should be my first article whose content is displayed here.
       </p>
       <p>
           This should be my first article whose content is displayed here.This should be my first article whose content is displayed here.This should be my first article
           whose content is displayed here.
       </p>'`};





var html template=`<html>
  <head>
      <title>
         Article-one i abhijeetsriram 
      </title>
      <meta none="viewpoint" content="width=device-width, initial-scale=1">
     <link href="/ui/style.css" rel="stylesheet" />
  </head>  
   <body>
       <div>
          <a href="/">Home</a>
       </div>
       <div class="container">
       <hr/>
       <h3>
           Article one
       </h3>
       <div>
           August 6,2017
       </div>
       <div>
    ${content}
       </div>
   </body> 
    
    `
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res) {
  res.sendFile(path.join(__dirname, 'ui','article-one.html'));
});
app.get('/article-two',function(req,res) {
    res.sendFile(path.join(__dirname, 'ui','article-two.html'));
});
app.get('/article-three',function(req,res) {
    res.sendFile(path.join(__dirname, 'ui','article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
