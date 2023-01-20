let connect = require('connect');

var app = connect()
  .use(function(req, res){

    console.log(JSON.stringify(req.headers));

  })
 .listen(3000);