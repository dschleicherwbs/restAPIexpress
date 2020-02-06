const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// Middleware
// cors allow cross axis request
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');

// Routes Middleware
app.use('/posts', postsRoute);

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  },
  () => console.log('DB Connected')
);

// Routes

// Listen
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
