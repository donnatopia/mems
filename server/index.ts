const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

