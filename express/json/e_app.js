const express = require('express')
const {readFileSync} = require('fs')

const PORT = 5000

const app = express()

const examplejson = [
    {
      "_id": "621a3d98bb3e60274fd3a239",
      "index": 0,
      "guid": "6bb264f9-5239-4ef5-a96a-9b07696a32f2",
      "isActive": true,
      "balance": "$1,633.11",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "blue",
      "name": "Margery Sykes",
      "gender": "female",
      "company": "GEOFORMA",
      "email": "margerysykes@geoforma.com",
      "phone": "+1 (925) 584-3334",
      "address": "882 Wyona Street, Brenton, Pennsylvania, 8962",
      "about": "Amet pariatur eiusmod eu magna cupidatat non excepteur sint tempor officia est. Cillum sunt Lorem aliqua esse. Incididunt nostrud sit officia culpa aliqua qui elit cupidatat Lorem aute in non. Cupidatat qui proident duis quis nostrud aute.\r\n",
      "registered": "2018-01-02T09:06:56 +06:00",
      "latitude": -43.969147,
      "longitude": 23.786509,
      "tags": [
        "minim",
        "ullamco",
        "Lorem",
        "mollit",
        "nostrud",
        "ad",
        "aliquip"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Greer Walters"
        },
        {
          "id": 1,
          "name": "Aileen Sampson"
        },
        {
          "id": 2,
          "name": "Kidd Leach"
        }
      ],
      "greeting": "Hello, Margery Sykes! You have 7 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "621a3d98a31d5fdf27a5ab98",
      "index": 1,
      "guid": "648eaea3-9151-4159-a4aa-1cc413df20ba",
      "isActive": true,
      "balance": "$3,475.08",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "eyeColor": "brown",
      "name": "Morales Mckee",
      "gender": "male",
      "company": "CAPSCREEN",
      "email": "moralesmckee@capscreen.com",
      "phone": "+1 (935) 566-2813",
      "address": "910 Lois Avenue, Mappsville, Alabama, 9286",
      "about": "Et occaecat laborum incididunt eu et. Est ex consequat commodo fugiat cillum elit nostrud. Aute incididunt laboris enim adipisicing. Id ex pariatur est cupidatat.\r\n",
      "registered": "2016-07-30T06:54:02 +05:00",
      "latitude": -16.964583,
      "longitude": -128.566309,
      "tags": [
        "quis",
        "labore",
        "deserunt",
        "et",
        "officia",
        "pariatur",
        "velit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Darlene Medina"
        },
        {
          "id": 1,
          "name": "Blackburn Rich"
        },
        {
          "id": 2,
          "name": "Sondra Spence"
        }
      ],
      "greeting": "Hello, Morales Mckee! You have 5 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "621a3d98fbdb801391c82704",
      "index": 2,
      "guid": "86246213-a66d-4079-abc4-2db001e327f8",
      "isActive": true,
      "balance": "$1,484.57",
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "eyeColor": "green",
      "name": "Kirby Kim",
      "gender": "male",
      "company": "EMERGENT",
      "email": "kirbykim@emergent.com",
      "phone": "+1 (849) 507-2683",
      "address": "357 Greenpoint Avenue, Finzel, New Mexico, 549",
      "about": "Culpa ut non enim eu adipisicing amet veniam enim eiusmod quis ex dolore. Duis id irure aliquip commodo laborum cillum mollit nostrud nisi ipsum nisi dolor. Amet aliquip enim id elit qui deserunt laborum culpa sint tempor ea consequat deserunt. Quis anim voluptate reprehenderit voluptate ex qui ex id velit aliquip et laborum reprehenderit nisi.\r\n",
      "registered": "2014-06-04T10:23:39 +05:00",
      "latitude": -68.924128,
      "longitude": 105.721641,
      "tags": [
        "laborum",
        "exercitation",
        "veniam",
        "consequat",
        "veniam",
        "nisi",
        "aliquip"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Schmidt Haley"
        },
        {
          "id": 1,
          "name": "Alford Mcfadden"
        },
        {
          "id": 2,
          "name": "Dunn Molina"
        }
      ],
      "greeting": "Hello, Kirby Kim! You have 3 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "621a3d989c6945dc06f22fe8",
      "index": 3,
      "guid": "f061ef31-b8b0-48f3-b4ca-5eafa176b2d4",
      "isActive": true,
      "balance": "$2,561.65",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "brown",
      "name": "Waller Nixon",
      "gender": "male",
      "company": "FLYBOYZ",
      "email": "wallernixon@flyboyz.com",
      "phone": "+1 (844) 554-3922",
      "address": "603 Hastings Street, Ronco, South Dakota, 8165",
      "about": "Ad officia enim exercitation tempor tempor reprehenderit nisi enim. Nisi esse officia deserunt occaecat elit qui excepteur deserunt culpa ad. Irure tempor veniam Lorem magna quis. Sint ipsum laborum tempor non ea ullamco. Lorem est velit ut laborum voluptate ipsum. Nisi ad dolore consectetur incididunt et eiusmod duis. Cupidatat deserunt dolore eiusmod ullamco Lorem commodo voluptate adipisicing laboris do est do.\r\n",
      "registered": "2021-07-29T10:31:29 +05:00",
      "latitude": -64.219678,
      "longitude": 145.602512,
      "tags": [
        "aliqua",
        "magna",
        "aliqua",
        "commodo",
        "incididunt",
        "veniam",
        "aute"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Chelsea Simpson"
        },
        {
          "id": 1,
          "name": "Malinda Hubbard"
        },
        {
          "id": 2,
          "name": "Audra Chapman"
        }
      ],
      "greeting": "Hello, Waller Nixon! You have 7 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "621a3d981d01c27cd4b07eef",
      "index": 4,
      "guid": "407b7cdd-8e07-4cd7-b08b-194f1d02c440",
      "isActive": true,
      "balance": "$3,595.76",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "blue",
      "name": "Wells Hanson",
      "gender": "male",
      "company": "TERASCAPE",
      "email": "wellshanson@terascape.com",
      "phone": "+1 (914) 509-3254",
      "address": "947 Cropsey Avenue, Fedora, Connecticut, 1563",
      "about": "Quis ad in aute nostrud et dolore ut deserunt. Tempor cillum ad anim consectetur ut ex laboris esse ex eiusmod magna qui. Ea voluptate Lorem officia culpa elit sunt voluptate ullamco ad aliqua id consequat magna nisi. Eiusmod aute irure do dolor consequat occaecat adipisicing consectetur dolore id amet eu mollit sint. Nulla quis aliquip adipisicing aute minim minim tempor quis mollit laboris commodo ex pariatur ex.\r\n",
      "registered": "2014-10-08T05:26:27 +05:00",
      "latitude": 41.416764,
      "longitude": -75.3168,
      "tags": [
        "mollit",
        "in",
        "laboris",
        "eiusmod",
        "reprehenderit",
        "ipsum",
        "laborum"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Navarro Mcgee"
        },
        {
          "id": 1,
          "name": "Elisa Thomas"
        },
        {
          "id": 2,
          "name": "Horn Hardin"
        }
      ],
      "greeting": "Hello, Wells Hanson! You have 4 unread messages.",
      "favoriteFruit": "strawberry"
    }
  ]
  
  app.get('/', (req, res) => {

    res.send('Home Page')

    })

  app.get('/api/v1/friends/:friendID', (req, res) => {
      let response = examplejson[0].friends[req.params.friendID]
      if (response === undefined) {
        
        return res.status(404).send(readFileSync('../error404.html'))
      }
      res.status(200).json(response)
  })

  app.get('/api/v1/query', (req, res) => {
      console.log(req.query)
      const {name, age} = req.query
      res.status(200).send(`<h1>Hi your name is ${name} and you are ${age} y/o </h1>`)
       
  })
  
app.listen(PORT, () => { 
    console.log(`Server is listening on port ${PORT}`)
})
