var mysql = require("mysql");

function createConnection() {
  return mysql.createConnection({
    host: process.env.db_server,
    port: process.env.db_port,
    database: process.env.db_name,
    user: process.env.db_username,
    password: process.env.db_password
  });
}
exports.load = sql => {
  return new Promise((resole, reject) => {
    const con = createConnection();
    con.connect(err => {
      if (err) reject(err);
    });
    console.log("connect database successfully");
    con.query(sql, (err, results, fields) => {
      if (err) {
        reject(err);
      }
      resole(results);
    });
    con.end();
  });
};

// const Sequelize = require('sequelize');
// const user =  process.env.db_username;
// const password = process.env.db_password;
// const host = process.env.db_server;
// const port =  process.env.db_port;
// const database = process.env.db_name;
// const sequelize = new Sequelize(`mysql://${user}:${password}@${host}:${port}/${database}`);
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
// module.exports = sequelize;
