const express = require('express');
let app = express();
app.get('/', function(req, res) {
  res.send('hello world');
});
app.listen(5000, function() {
  console.log('running');
});
