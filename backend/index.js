
//const app = require("biyerler")

const app = require("./app.js")
const server = require('http').createServer(app)
PORT = 3000


server.listen(PORT, console.log("Server listening on port", PORT))

module.exports = server