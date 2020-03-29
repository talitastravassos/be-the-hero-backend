const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log(`Node.js listening on port ${port}...`);
});
