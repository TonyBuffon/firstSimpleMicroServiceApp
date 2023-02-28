const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.get('/posts', (req, res) => {
  res.send('GET request to the homepage')
})

app.post('/events', function (req, res) {
  res.send('POST request to the homepage')
})


app.listen(4002, ()=>{
    console.log("Server is running on port 4000");
})