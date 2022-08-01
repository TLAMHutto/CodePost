const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const api = require('./server/routes/api');
//parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Server static files
app.use(express.static(path.join(__dirname, 'dist')));

//Set api routes
app.use('/api', api)

//Return other routes to Aunger index files
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/code-post/index.html'));
})
//Set port
const port = process.env.PORT || '3000';
app.set('port', port);

//Create the http server
const server = http.createServer(app);
server.listen(port, () => console.log(`Server running on port ${port}`));