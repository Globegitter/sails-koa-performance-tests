var Resource = require('koa-resource-router');
var model = require('./model');

module.exports = new Resource('users', {
  // GET /users
  index: function *(next) {
    console.log(this.request.querystring)
    this.body = 'users!';
  },
  // GET /users/new
  new: function *(next) {
  },
  // POST /users
  create: function *(next) {
  },
  // GET /users/:id
  show: function *(next) {
  },
  // GET /users/:id/edit
  edit: function *(next) {
  },
  // PUT /users/:id
  update: function *(next) {
  },
  // DELETE /users/:id
  destroy: function *(next) {
  }
});
