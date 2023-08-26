const Router = require("@koa/router");
const catalogController = require("../controller/catalog");

const router = new Router();

router.post("/catalog/queryCatalogList", catalogController.queryCatalog);

module.exports = router;
