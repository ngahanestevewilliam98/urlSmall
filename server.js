// Imports library
require('colors');
const express = require('express');
const database = require('./configs/mysqldb');
const log = require('./helpers/logs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/web').router;
const baseURI = '';
const versionApi = '';
const port = 8084;

// Middlewares
const auth = require('./middlewares/authorization');

// Instanciate server
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const socketR = require('./socket/socket.io.request');
io.on('connection', (client) => {
  socketR.aurelien_request(client);
});

// Cors request
app.use(cors())

// Authorization request
app.use(auth);

// Body Parser Configuration
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Configure routing
app.use(baseURI + versionApi, apiRouter);

// View  configuration
app.use(express.static(path.join(__dirname, 'dist/webSite')));

// Launch server
server.listen(port, function () {
  database.connection();
  let url = `http://localhost:${port+baseURI+versionApi}`
  log.put("core", {
    message: "Server start",
    port: port,
    base_url: url,
    time: new Date()
  })
  console.log(`\nSERVER LAUNCH`.rainbow);
  console.log(`Port : ${port}`.blue);
  console.log(`Base url : ${url}\n`.grey);
});