const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

app.use(async (ctx, next) => {
    const start = Date.now(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = Date.now() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});

app.use(async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html'
  ctx.response.body = '<h1>Hello Koa!</h1>'
  // ctx.body = 'Hello World';
});

app.listen(3000);