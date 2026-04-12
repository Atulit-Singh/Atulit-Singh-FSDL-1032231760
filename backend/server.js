const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/portfolio');

// Routes
const studentRoutes = require('./routes/studentRoutes');
app.use('/student', studentRoutes);

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});