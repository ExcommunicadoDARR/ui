



module.exports =  function testpy() {



  var path = require("path")
  var options = {
    scriptPath: path.join(__dirname, '../python'),
    args: ['testpy', 'raghu']
  }
  const { PythonShell } = require('python-shell');
  var pyshell = new PythonShell('new.py', options)


  pyshell.on('message', function (message) {
    console.log(message)


  })



}

