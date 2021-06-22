const express = require('express');
const cors = require('cors');

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = './public';
server.use(express.static(staticServerPath));

// users

const users = []; // fake users data base

// api endpoints

server.post('/user', (req, res) => {
  console.log('Query params:', req.query);
  console.log('Query param userName:', req.query.userName);
  console.log('Query param userEmail:', req.query.userEmail);

  // add new user to daba base
  users.push({
    name: req.query.userName,
    email: req.query.userEmail,
  });

  res.json({
    result: 'User created',
  });
});

/*
server.get('/users', (req, res) => {
  const filterName = req.query.filterByName;
  console.log(res);
  const filteredusers = users.filter((user) => (user.name = req.query.name));
  res.json(filteredusers);
});
*/
server.get('/users', (req, res) => {
  const filteredusers = users.filter((user) =>
    console.log(req.query.name);
    ((user.name = req.query.name))
  );
  console.log('user filtered' + filteredusers);
  res.json({
    result: filteredusers,
  });
});
