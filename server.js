const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(__dirname));

app.listen(9000, () => console.info('server running at http://localhost:9000/'));
