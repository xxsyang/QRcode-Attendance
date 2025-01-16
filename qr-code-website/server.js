const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint to handle form submission
app.post('/submit', (req, res) => {
    const { name, date } = req.body;
    console.log(`Received data - Name: ${name}, Date: ${date}`);
    res.json({ message: 'Data received successfully', data: req.body });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});