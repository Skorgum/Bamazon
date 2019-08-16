const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;

    console.log("【ツ】" + "\nNow connected to Bamazon Database")
})