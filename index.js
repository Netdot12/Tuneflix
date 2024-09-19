const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Default route to send index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
