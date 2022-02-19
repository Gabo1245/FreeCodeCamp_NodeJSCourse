const http = require('http')

const server = http.createServer((req, res) => {
if (req.url === '/') {
res.end('Webserver started sucessfully')
}
else if (req.url === '/about') {
res.end('Here is some generic text to test some code')

}

else {
    res.end('<h2>Error 404: Sorry! This page does not exist</h2>')
}

}

)

server.listen(5000)
