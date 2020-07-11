const express = require('express');

const app = require('./app');

// app.get('/', (request, response) => {
//   return response.json({ message: 'Hello World '});
// });

app.listen(3333, () => {
  console.log('🚀️ Back-end started!');
});