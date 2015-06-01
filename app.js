//Dependencias
var bodyParser = require('body-parser'),
	express = require('express'),
	http = require('http'),
	mongoose = require('mongoose'),
	path = require('path');

var app = express();
var server = http.createServer(app);

//setup
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

server.listen(app.get('port'), function(){
  console.log('server listening on port ' + app.get('port'));
});

//conectar a la BD
mongoose.connect('mongodb://localhost/CasosPrueba', function(err) {
	if (err) {
		console.log('connection error', err);
	} else{
		console.log('connection successful!');
	}
});

//importar las funciones de enrutamiento
var routes = require('./routes/casoPruebaRutas.js')(app);