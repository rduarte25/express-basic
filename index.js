var express = require('express');

var fs = require('fs');

var bodyParser = require('body-parser');

var app = express();

//app.use('/virtual', express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('/opt/lampp/htdocs/sgsst-v0.02/AdminLTE-2.4.10'));

app.get('/', function(llamado, respuesta){
	console.log('Se hizo un llamado get');

	respuesta.send('Hola desde express');
});

app.get('/editor.html', function(llamado, respuesta){
	respuesta.sendFile(__dirname + '/' + 'editor.html');
});

app.get('/editors.html', function(llamado, respuesta){
	respuesta.sendFile('/opt/lampp/htdocs/sgsst-v0.02/AdminLTE-2.4.10/pages/forms/editors.html');
});

app.post('/datos_recibidos', function(llamado, respuesta) {
	var nombre = llamado.body.nombre;
	var apellido = llamado.body.apellido;
	respuesta.send('El nombre es: ' + nombre + '<br>' + 'El apellido es: ' + apellido);
});

app.get('/get', function(llamado, respuesta) {
	var nombre = llamado.query.nombre;
	var apellido = llamado.query.apellido;

	respuesta.send('El nombre es: ' + nombre + '<br>' + 'El apellido es: ' + apellido);
});

app.listen(3000, function(){
	console.log('Aplicación corriendo en el puerto 3000');
});

//sgsst-v0.02/AdminLTE-2.4.10/pages/forms/editors.html