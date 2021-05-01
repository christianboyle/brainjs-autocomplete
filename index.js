const brain = require('brain.js');

// provide training data
const data = ['Thank you.', "I'm not interested.", 'Call me later.'];

// create an AI model to be trained
const lstm = new brain.recurrent.LSTM();

// train that model
const result = lstm.train(data, {
  iterations: 1500,
  log: (details) => console.log(details),
  errorThresh: 0.011,
});

// ai autocomplete is ready
console.log('autocomplete: ' + lstm.run('Thank'));
// prints "autocomplete: you"
