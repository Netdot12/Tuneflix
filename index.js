const express = require('express');
const app = express();

// Set up middleware, routes, etc.
app.use(express.json());
app.use(express.static('public')); // Adjust as needed

app.get('/', (req, res) => {
    res.send('Hello from Vercel!');
});

// Use the environment variable for port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
});
