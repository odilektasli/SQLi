// The /api router
const router = require('express').Router()

const db = require("../database.js")
const Crypto = require('crypto')
const md5 = require('md5')

// Root index announcer for /api
router.post('/login', (req, res) => {
    let passw = Crypto.createHash('sha512').update(req.body.password).digest('base64')
    let query = `
        SELECT
            *
        FROM 
            user
        WHERE
            user.UNAME = ? AND
            user.PASSWD = ?
    `
    db.query(query, [req.body.uname, passw], (err,result)=>{
        if(err){
            console.log(err)
        }else{
            if(result[0]){
                console.log(result)
                res.send(result)
            }else{
                res.sendStatus(404)
            }
        }
    })
})

router.post('/sqli', (req, res) => {
    
    console.log("pw", req.body.password, "uname",req.body.uname)
    let query = `
        SELECT
            *
        FROM 
            user
        WHERE
            user.UNAME = '${req.body.uname}' AND user.PASSWD = '${Crypto.createHash('sha512').update(req.body.password).digest('base64')}' 
            
            
            
    `
    db.query(query, (err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(query)
            if(result[0]){
                res.send(result)
            }else{
                console.log("notfound?")
                res.send(404)
            }
        }
    })
})

module.exports = router
