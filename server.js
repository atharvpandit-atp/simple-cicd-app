const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple Frontend HTML served by the backend
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My CI/CD App</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f4f4f9; }
                h1 { color: #333; }
                .status { font-size: 1.2rem; color: #0070f3; font-weight: bold; }
                .version { color: #888; font-size: 0.9rem; }
            </style>
        </head>
        <body>
            <h1>I just updated my live app via CI/CD</h1>
            <p class="status">Status: Live and deployment is fully automated!</p>
            <p class="version">Version: 1.0.1</p>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});