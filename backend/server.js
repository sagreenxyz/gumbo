const apikey = require('./utils/apikey')

require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.json({
        message: 'Hello, World!'
    })
})

app.post('/api', (req, res) => {
    // curl http://localhost:5000/api -H 'Content-Type: application/x-www-form-urlencoded' -d 'email=sagreenxyz@gmail.com'
    console.log(req.body.email)
    res.json({
        api_key: apikey.getAPIKey(64)
    })
})

app.listen(process.env.PORT, () => {console.log(`server running at http://localhost:${process.env.PORT}`)})
