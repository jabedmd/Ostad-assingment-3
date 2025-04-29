
const express = require('express');
const app = express();
const userRoutes = require('./userRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 3400;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});