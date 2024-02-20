const express = require('express');
const bodyParser = require('body-parser');
const db = require('./node-login/models/user'); // MongoDB bağlantısı
const cors=require('cors');
//const app = require('./server'); // Express uygulaması
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const userRoutes = require('./node-login/routes/user');
app.use('/api/user', userRoutes);

app.listen(port, () => {
    console.log(`Sunucu ${port} numaralı port üzerinde çalışıyor.`);
});
