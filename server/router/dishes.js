const Router = require("@koa/router");
const dishesController = require("../controller/dishes");

const router = new Router();

router.post("/dishes/addDishes", dishesController.addDishes);
router.post("/dishes/randomDishes", dishesController.randomDishes);

module.exports = router;
