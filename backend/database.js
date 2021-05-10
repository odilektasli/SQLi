const mysql = require('mysql')

const connection = mysql.createPool({
    host: "46.101.231.129",
    user: "ise426",
    password: "cokgizlisifre",
    database: "acc_blogs"
})

module.exports = connection
