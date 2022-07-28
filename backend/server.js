const apikey = require('./utils/apikey')

// console.log(apikey.getAPIKey())

require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        message: 'Hello, World!'
    })
})

app.get('/api', (req, res) => {
    res.json({
        api_key: apikey.getAPIKey(64)
    })
})

app.listen(process.env.PORT, () => {console.log(`server running at http://localhost:${process.env.PORT}`)})
