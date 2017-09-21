const express = require('express')
const app = express()

app.use(function (req, res, next) {
  const date = new Date();
  console.log(date.toISOString());
  const day = date.getDay();
  const month = date.getDate();
  const year = date.getFullYear();
  req.dateInfo = `${day}/${month} - ${year}`;
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!' + req.dateInfo)
})

app.get('/numbers', function (req, res) {
  res.json([1, 2, 3, 4])
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})