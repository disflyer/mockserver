const mock = require('./api');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser())
app.use(mock.routes())

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);