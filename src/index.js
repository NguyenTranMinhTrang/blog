const express = require('express')
const morgan = require('morgan')
const { engine } = require ('express-handlebars');
const path  = require('path');
const port = 3000
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", path.join(__dirname, 'resource/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/search', (req, res) => {
  res.render('search');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})