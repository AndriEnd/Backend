// index.js

const express = require('express');
const userRoutes = require('./user'); // Impor route user.js

const app = express();

const verifyToken = require('./middleware/Auth');

app.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: `Welcome User ${req.user.userId}` });
});

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan route dari user.js
app.use('/', userRoutes);

// Jalankan server di port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
