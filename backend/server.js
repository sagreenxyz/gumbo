const data = []

const apikey = require('./utils/apikey')
const DEFAULT_KEY_SIZE = 64

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
    const result = data[data.push({
        email: req.body.email,
        api_key: apikey.getAPIKey(DEFAULT_KEY_SIZE)
    })-1]
    console.log(data)
    res.json(result)
})

app.listen(process.env.PORT, () => {console.log(`server running at http://localhost:${process.env.PORT}`)})
