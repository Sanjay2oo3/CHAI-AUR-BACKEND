require('./LEC-1/node_modules/dotenv/lib/main').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.get('/twitter', (req, res) => {
    res.send('Twitter');
    }
);

app.get('/login', (req, res) => {
    res.send('<h1>Please login</h1>');
    }
);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
    }
);