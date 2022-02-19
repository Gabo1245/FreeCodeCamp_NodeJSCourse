const axios = require('axios')

const testPackage = async () => {

await axios.get('https://www.google.com/').then((response) => {
    console.log(response)
})

}

testPackage()
