const router = require('koa-router')();

router.prefix('/users');

router.get('/', function (next) {

});

router.get('/bar', function (next) {

});

module.exports = router;
