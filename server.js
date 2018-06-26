const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-parser');
const _ = require('lodash');

const router = require('./routes'); // supposedly can write this is just routes


var app = new Koa();
const PORT = 8080;

// app.use(bodyParser())// make sure you use bodyParser before the router
// app.use(router.routes());

app.listen(PORT);
console.log(`Server is listening on PORT ${PORT}`);