var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.render('public/index');
});

app.listen(app.get('port'), function(){
  console.log("Node app running on port", app.get('port'));
});
