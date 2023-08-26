const mysql = require("mysql");

// 数据库
const poolSql = mysql.createPool({
    host: "localhost", //url
    port: 3306, //端口
    user: "root", //库名称
    password: "12345678", //数据库密码
    database: "random_dishes", //表名称
    charset: "utf8mb4",
});

// 查询
function query(sql, value = []) {
    return new Promise((resolve, reject) => {
        poolSql.query(sql, value, (error, result) => {
            error && reject(error); //有错误信息时reject
            resolve(result); //抛出查询结果
        });
    });
}

module.exports = query;
