const express = require('express');
const bodyParser = require('body-parser');

const {poolPromise} = require('./dbUtil');
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000

var registration = require('./nodeApi/api/registration');

app.use('/api/registration',registration);




app.get('/api/hello', async (req, res) => {






});

app.listen(port, () => console.log(`Listening on port ${port}`));
