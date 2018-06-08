const express = require('express');
const app = express();
const PORT = process.env.port || 7000;

app.get('/', (req, res, next) => {
  res.send('Hello, root route is working');
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))