const express = require('express');
const bodyParser = require('body-parser');
const routes =  require('./routes/routes');
// import * as routes from '../routes/routes';

// set up express app
const app = express();

//set up static files
app.use(express.static('public'));

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/', routes);

// listen for requests
const port = process.env.port || 8080;
app.listen(port, function(){
    console.log('now listening for requests on port' + port);
});
