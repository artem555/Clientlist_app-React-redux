const express = require('express');
const bodyParser = require('body-parser');
const clients = require('./mocks/clients.json');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(__dirname));

app.get('/get-data', (req, res) => {
  setTimeout(() => res.status(200).send(clients), 2000); // delay response
});

app.listen(9000, () => console.info('server running at http://localhost:9000/'));
