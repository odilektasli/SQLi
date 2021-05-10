// Modules
const https         = require('https')
const createError   = require('http-errors')
const express       = require('express')
const app           = express()

// Routers
const apiRouter = require('./api/api.js')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// Register routers
app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500).end()
})

module.exports = app