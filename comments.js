// Create web server
// Load modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Use body-parser to parse POST request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Read comments from file
let comments = JSON.parse(fs.readFileSync('comments.json'));

// GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.json(newComment);
});

// Start server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});