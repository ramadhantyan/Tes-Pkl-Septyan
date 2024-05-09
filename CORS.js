const express = require('express');
const app = express();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
    next();
});


app.get('/data', (req, res) => {
    res.json({ message: 'Data yang diambil dari server.' });
});


app.listen(3000, () => {
    console.log('Server berjalan di port 3000');
});
