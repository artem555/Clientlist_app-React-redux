const express = require('express');
const bodyParser = require('body-parser');
const clients = require('./mocks/clients.json');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(__dirname));

const checkIncludes = (val, searchVal) => val.toLowerCase().includes(searchVal.toLowerCase());

app.get('/get-data', (req, res) => {
  const searchValue = req.query.value;
  const filterConditionsCallback = client => (
    checkIncludes(client.general.firstName, searchValue)
    || checkIncludes(client.general.lastName, searchValue)
    || checkIncludes(client.job.title, searchValue)
    || checkIncludes(client.job.company, searchValue)
    || checkIncludes(client.contact.email, searchValue)
    || checkIncludes(client.contact.phone, searchValue)
    || checkIncludes(client.address.street, searchValue)
    || checkIncludes(client.address.city, searchValue)
    || checkIncludes(client.address.zipCode, searchValue)
    || checkIncludes(client.address.country, searchValue)
  );

  const filteredClients = searchValue === '' ? [] : clients.filter(filterConditionsCallback);
  //setTimeout(() => res.status(200).send(clients), 2000); // delay response
  setTimeout(() => res.status(200).send(filteredClients), 1000);
});

app.listen(9000, () => console.info('server running at http://localhost:9000/'));
