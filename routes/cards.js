const express = require('express');
const router = express.Router();
//const data = require('../data/flashcardData.json').data;
const { data } = require('../data/flashcardData.json');
//const cards = data.cards;
const { cards } = data;

router.get('/', function(req, res){
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive
  }
  const maxNumber = cards.length;
  res.redirect("/cards/" + getRandomInt(0, maxNumber) + "?side=question");
});

router.get('/:id', function(req, res){
  const name = req.cookies.username
  const { side } = req.query;
  const { id } = req.params;
  const text = cards[id][side];
  const { hint } = cards[id];

  const templateData = { side, id, text, hint, name };
  // console.log(templateData);

  res.render('card', templateData);
});

module.exports = router;
