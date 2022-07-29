const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! This is the updated version of You withnessing the greatest'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
