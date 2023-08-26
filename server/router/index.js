const Router = require("@koa/router");
const fs = require("fs");
const path = require("path");

const router = new Router();

let fileList = fs.readdirSync(__dirname);

for (const fileName of fileList) {
    if (fileName === "index.js") continue;
    const fileRoute = require(path.join(__dirname, fileName));
    router.stack.push(...fileRoute.stack);
}

module.exports = router;
