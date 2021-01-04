const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello express');
});

app.listen(3000, () => {
    console.log('run express server on PORT 3000');
});