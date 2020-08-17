const express = require('express');

const app = express();

/**
 * Execute este Js com seguinte comando no prompt
 *   yarn teste
 */

app.get('/projects', (request,response) => {
  return response.json({ message: 'Hello World, Hello Apucarana! \n Now I\'m here! ' });
});

app.listen(3332, () => {
  console.log('🚀 Back-end started!')
});