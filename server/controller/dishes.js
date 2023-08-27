const query = require("../db");

const body = { code: 1, data: null, msg: "成功" };
class Dishes {
    addDishes(ctx) {
        const _info = ctx.request.body ?? {}; //获取参数
        if (!_info.dishName) {
            body.msg = "菜品名字不可为空";
            body.data = null;
            body.code = 0;
            ctx.body = body;
            return;
        }
        const sql = `INSERT INTO
            dishes (catalog_id, dish_name, update_date, user_id)
            VALUES
            (${_info.catalog},"${_info.dishName}",NOW(),1);`;
        return query(sql)
            .then(() => {
                body.msg = "添加菜品成功~";
                ctx.body = body;
            })
            .catch((error) => {
                body.code = 0;
                body.msg = "添加失败";
                if (error.code === "ER_DUP_ENTRY") body.msg = "菜名重复";
                ctx.body = body;
            });
    }
    randomDishes(ctx) {
        const _info = ctx.request.body ?? [];
        const sql = _info.random?.reduce((pre, curr) => {
            let baseSql = `(SELECT * FROM dishes WHERE catalog_id = ${curr.catalogId} ORDER BY RAND() LIMIT ${curr.number}) `;
            return pre === "" ? baseSql : pre + "UNION " + baseSql;
        }, "");
        const allSql = `SELECT random_dishes.catalog_id, random_dishes.dish_name, dishes_catalog.catalog_emoji
                            FROM (${sql}) AS random_dishes
                            JOIN dishes_catalog
                            ON random_dishes.catalog_id = dishes_catalog.catalog_id;
                        `;
        return query(allSql)
            .then((data) => {
                body.data = data;
                ctx.body = body;
            })
            .catch((error) => {
                console.log(error);
                body.code = 0;
                body.msg = "查询失败";
                ctx.body = body;
            });
    }
    queryDishesList(ctx) {
        const sql = `SELECT dishes_catalog.catalog_emoji, temp_dishes.dish_name, temp_dishes.id
                        FROM (SELECT * FROM dishes) AS temp_dishes
                        JOIN dishes_catalog
                        ON temp_dishes.catalog_id = dishes_catalog.catalog_id;
                    `;
        return query(sql)
            .then((data) => {
                body.data = data;
                ctx.body = body;
            })
            .catch(() => {
                body.code = 0;
                body.data = [];
                body.msg = "查询失败";
                ctx.body = body;
                return;
            });
    }
}

module.exports = new Dishes();
