const express = require('express')
const app = express()
const port = 5000

const axios = require('axios')

const options = {
  method: 'GET',
  url: 'https://live-golf-data.p.rapidapi.com/leaderboard',
  params: {tournId: '014', year: '2022'},
  headers: {
    'X-RapidAPI-Host': 'live-golf-data.p.rapidapi.com',
    'X-RapidAPI-Key': 'a88b125292mshf9eeb0237e7670ep15c932jsn149bde2d2507'
  }
};

axios.request(options).then((response) => {
	console.log(response.data)
}).catch((error) => {
	console.error(error)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
