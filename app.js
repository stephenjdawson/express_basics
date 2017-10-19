const express = require('express');

const app = express();

const names = [
  'Stephen Dawson',
  'Bob Frank',
  'Joe Blow',
  'Henry Green',
  'Thaddius Blue'
];

app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/cards', function(req, res){
  res.render('card', {prompt: "Who is buried in Grants tomb?", hint: "Whose tomb is it?"});
});

app.get('/sandbox', function(req, res){
  res.render('sandbox', {names: names});
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Running on localhost:3000");
});
