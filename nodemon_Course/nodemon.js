const axios = require('axios')


const url = 'https://www.twitter.com'

const getRequestnodemon = () => {

axios.get(url).then((response) => {
    console.log(response)
})
}

getRequestnodemon()
