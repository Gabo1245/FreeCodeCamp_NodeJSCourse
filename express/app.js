const express = require('express')

const app = express()

app.get('/', (req, res) => {

    res.send('Home Page')

})

app.get('/about', (req, res) => {
    
    res.set('content-type', 'text/html')
    res.send('<title> About Page </title> <h1> About this tutorial </h1> <h2> Lorem ipsum ... </h2>')

})

app.get('/api/v1', (req, res) => {
    res.set('content-type', 'application/json')

    const def_object  = [{
        Users: {
            'Gabriel Ponce': 17,
            'Another User': 14
        }

    }]

    res.status(200).send(def_object)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})