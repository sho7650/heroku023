const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  const hostname = req.headers.host;

  switch (hostname) {
    case 'localhost':
      res.render('local', { title: 'access to localhost' });
      break;
    case 'prfm.info':
      res.render('prfm', { title: 'access to Perfume' });
      break;
    case 'multi.kashiyuka.info':
      res.render('kashiyuka', { title: 'access to kashiyuka' });
      break;
    case 'multi.prfm.jp':
      res.render('index', { title: 'access to prfm.jp' });
      break;
    default:
      let err = new Error('host not found');
      err.status = 400;
      next(err);
      break;
  }
});

module.exports = router;
