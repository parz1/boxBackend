var mysql = require("mysql");
var databaseConfig = require("../config/database.config");

module.exports = {
  query: (sql, params, cb) => {
    var conn = mysql.createConnection(databaseConfig);
    try {
      conn.connect(err => {
        if (err) {
          console.log("CONNECTION FAILED!");
          throw err;
        }
        conn.query(sql, params, (err, res, fields) => {
          if (err) {
            console.log("SQL ERR!");
            throw err;
          }
          cb && cb(res, fields); //res 为数据操作返回结果, fields为数据库连接的字段
          conn.end(err => {
            if (err) {
              console.log("SHUTDOWN CONNECTION FAILED!");
              throw err;
            }
          });
        });
      });
    } catch (error) {
      throw error;
    }
  }
};
