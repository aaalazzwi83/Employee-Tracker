var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "vlbglv2hmhbzi4b4",
    password: "died55w1ysc4xhjn",
    database: "nj3tqxesyhc2cdyf"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection