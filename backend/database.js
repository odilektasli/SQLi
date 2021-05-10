const mysql = require('mysql')

const connection = mysql.createPool({
    host: "46.101.231.129",
    user: "ise426",
    password: "cokgizlisifre",
    database: "ise_project"
})

module.exports = connection
