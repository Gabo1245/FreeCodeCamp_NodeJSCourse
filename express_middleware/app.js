const express = require('express')
const app = express()

const PORT = 5000 

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()

    console.log(method, url, time)
    next()
}


app.get('/', logger, (req, res) => {

    

    res.send('<h1>Default Home Page<h1>')

})

app.get('/about', logger, (req, res) => {

    res.send('<h2> About Page </h2>')

})

app.listen(PORT, () => {
    console.log(`Server is listening in port ${PORT}`)
})