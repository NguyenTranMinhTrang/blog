const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const path = require('path');
const port = 3000
const app = express();
const route = require('./route/')


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(morgan('combined'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", path.join(__dirname, 'resource/views'));


// init routes
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})