var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const hostname = req.headers.host;

  if (hostname.match(/^localhost/))
    res.render('local', { title: 'access to localhost' });
  if (hostname.match(/^multi.kashiyuka.info/))
    res.render('kashiyuka', { title: 'access to kashiyuka' });
  if (hostname.match(/^multi.prfm.jp/))
    res.render('index', { title: 'Heroku Meetup #23' });

  let err = new Error('host not found');
  err.status = 400;
  next(err);
});

module.exports = router;
