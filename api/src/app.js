const express = require('express');
const morgan = require('morgan')
const routes = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')

const server = express();

server.use(cors())
server.use(express.json())
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(morgan('dev'))

server.use('/api', routes)
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, accesstoken, headers');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    next();
  });




  module.exports = server
