'use strict';

require('dotenv').config();

const SERVER = require('./server');

SERVER.start(process.env.PORT);