var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();
var fs = require('fs');

// var app = express();

// app.engine('hbs', exphbs({defaultLayout: 'main'}));
// app.set('view engine', '.hbs');

// app.get('/', function (req, res) {
//     res.render('home');
// });

// app.listen(3000);


// Setup hbs for templates
app.engine('hbs', exphbs({
    defaultLayout : 'main',
    extname: '.hbs'
  }
));
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/dist'));

require('./routes')(app);

var port = 4003;
app.listen(port);
console.log('Node server running on 127.0.0.1 at port', port);