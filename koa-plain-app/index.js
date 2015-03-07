// var koa = require('koa');
// var app = koa();
var koala = require('koala');
var app = koala();
var parse = require('co-body');
var users = require('./user/route');

var port = process.argv[2] || 3000;

// handlers here

app.use(users.middleware());

app.use(function *(next) {
  if (this.path === '/') {
    // you can set the response body in handler like this
    this.body = 'Go to /users route';
    // console.log(this.request.querystring);
    // this.body = yield this.request.urlencoded();
  //   console.log(body);
  } else {
    return yield next;
  }
});

// app.listen(port);

var fn = app.callback();

require('http').createServer(fn).listen(function (err) {
  if (err) throw err;
  this.address().port = 3000;
  // console.log('Koala app listening on port %s', this.address().port);
  console.log('Koala app listening on port %s', this.address().port);
});
