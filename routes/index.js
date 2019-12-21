var express = require('express');
var router = express();
const anonymous = require('./anonymous/index');
/* GET home page. */
router.use('/',anonymous);

module.exports = router;
