// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

const User = require('./models/User');
const userRoutes = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: ["http://localhost:5173"], // Frontend URL
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.get('/', async (req, res) => {
    const users = await User.find();
    // If you are not using EJS anymore, send JSON
    res.json(users); // changed from res.render
});

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
