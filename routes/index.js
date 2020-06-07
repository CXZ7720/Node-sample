var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let json = {
    name : 'John Doe',
    password : 'SuperStrong_Password'
  }
  res.json(json);
});

module.exports = router;
