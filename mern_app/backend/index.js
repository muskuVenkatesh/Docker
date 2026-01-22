const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const cors = require('cors');


const userRoutes = require('./routes/user');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// const expressLayouts = require('express-ejs-layouts');


// app.set('view engine', 'ejs');
// Enable layouts
// app.use(expressLayouts);          
// app.set('layout', 'layout');
app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true,
}));

app.use(express.json());

// app.use(express.urlencoded({ extended: true }));
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// Routes
app.use('/users', userRoutes);
app.get('/', async (req, res) => {
    const users = await User.find();
    res.render('index', { users });
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
