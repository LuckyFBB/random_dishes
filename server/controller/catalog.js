const query = require("../db");

class Catalog {
    queryCatalog(ctx) {
        const body = { code: 1, data: null, msg: "成功" };
        const sql = `SELECT * FROM dishes_catalog;`;
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

module.exports = new Catalog();
