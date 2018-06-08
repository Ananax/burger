const express = require('express');
const bodyParser = require('body-parser');

const port = 3000 || env.process.port;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));



// Set Handlebars.
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', "handlebars");

// Import routes and give the server access to them.
var routes = require('./controllers/burger_controllers');
app.use('/', routes);


app.listen(port);