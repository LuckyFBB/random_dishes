const koa = require("koa");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");

const router = require("./router");

const app = new koa();

// 获取 body 中除了文件的信息
app.use(bodyParser());

// 配置跨域
app.use(cors());

// 路由匹配
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log("run in http://localhost:3000");
});
