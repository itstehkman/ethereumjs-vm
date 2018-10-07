var VM = require('.')

//create a new VM instance
var vm = new VM()
var code = '46'
var code = '46'

vm.runCode({
  code: Buffer.from(code, 'hex'), // code needs to be a Buffer
  gasLimit: Buffer.from('ffffffff', 'hex')
}, function(err, results){
  console.log('returned: ' + results.return.toString('hex'));
})
