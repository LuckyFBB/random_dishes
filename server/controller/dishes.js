const query = require("../db");

class Dishes {
    addDishes(ctx) {
        const body = { code: 1, data: null, msg: "成功" };
        const _info = ctx.request.body ?? {}; //获取参数
        if (!_info.dishName) {
            body.msg = "菜品名字不可为空";
            body.data = null;
            body.code = 0;
            ctx.body = body;
            return;
        }
        const sql = `INSERT INTO
            dishes (catalog_id, dish_name, update_date)
            VALUES
            (${_info.catalog},"${_info.dishName}",NOW());`;
        return query(sql)
            .then(() => {
                body.msg = "添加菜品成功~";
                ctx.body = body;
            })
            .catch((error) => {
                body.code = 0;
                if (error.code === "ER_DUP_ENTRY") body.msg = "菜名重复";
                ctx.body = body;
            });
    }
}

module.exports = new Dishes();
