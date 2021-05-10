// The /api router
const router = require('express').Router()

const db = require("../database.js")

// Root index announcer for /api
router.get('/', (req, res, next) => {
    res.end("api root")
    //db.query(...)
})

module.exports = router