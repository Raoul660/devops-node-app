
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>My First DevOps Application</h1>
        <p>Welcome to my Node.js application!</p>
        <p>Successfully deployed using DevOps.</p>
    `);
});

app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Application is running'
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
