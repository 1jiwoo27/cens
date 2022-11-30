var PythonShell = require('python-shell');


var options = {

  mode: 'text',

  pythonPath: '',

  pythonOptions: ['-u'],

  scriptPath: '',

  args: [3,3,20,2]

};


PythonShell.PythonShell.run('knapsack.py', options, function (err, results) {

  if (err) throw err;


  console.log('results: %j', results);

});