const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('server running on port 3000');
});

app.get('/name', callName);

function callName(req, res) {
  const spawn = require('child_process').spawn;

  const process = spawn('python', [
    './hello.py',
    req.query.firstname,
    req.query.lastname,
  ]);

  process.stdout.on('data', function (data) {
    res.send(data.toString());
  });
}

// example: http://localhost:3000/name?firstname="Lucas"&lastname="Leal"
