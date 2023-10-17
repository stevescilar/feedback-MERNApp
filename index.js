const express = require('express'); //import express
const app = express();

// route handler
app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

app.listen(5000);
