var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/progress', { title: 'TaskRacer', currentPage: 'progress'});
});

module.exports = router;