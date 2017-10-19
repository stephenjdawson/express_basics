const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('card', {prompt: "Who is buried in Grants tomb?", hint: "Whose tomb is it?"});
});

module.exports = router;
