const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Database Connection
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth'));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
