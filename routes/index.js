var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/contato', (req, res, next) => {
  res.render('contato', {title: 'Contato'})
});


module.exports = router;
