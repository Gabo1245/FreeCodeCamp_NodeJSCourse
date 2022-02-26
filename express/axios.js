const axios = require('axios')

const url = 'http://localhost:5000/api/v1'
console.log(url)

const getAPI = async () => {
await axios.get(url).then((response) => {

    console.log(response.data)

})

}

getAPI()