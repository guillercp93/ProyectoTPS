module.exports = {
	'LLenar formulario de caso de prueba': function(cliente) {
		cliente
			.url('http://127.0.0.1:8080/new')
			.assert.title('Nuevo')
			.setValue('input[name=nProyecto]', 'Proyecto 001')
			.setValue('input[name=idCasoPrueba]', '2')
			.setValue('input[name=nombreCP]', 'Crear caso de prueba')
			.setValue('textarea[name=descripcion]', 'El caso de prueba se crea con las herramientas nightwatch y selenium')
			.setValue('input[name=Precondiciones]', 'Tener instaladas las herramientas')
			.setValue('input[name=casosUso]', 'Crear caso de Prueba')
			.setValue('textarea[name=pasosEjecucion]', '1. llenar el formulario 2. clic en enviar')
			.setValue('input[name=rEsperados]', 'Los datos guardados del formulario sean guardados en la BD')
			.click('#plantilla > div:nth-child(9) > div:nth-child(2) > label > input[type="radio"]')
			.setValue('input[name=rObtenidos]', 'Datos guardados en la BD')
			.setValue('input[name=errores]', 'ninguno')
			.setValue('input[name=diseniador]', 'Andrea Mora')
			.setValue('input[name=ejecutor]', 'Guillermo Castillo')
			.setValue('textarea[name=comentario]', 'Todos estos datos han sido llenados por el framework NightWatch -o-')
	},

	'Enviar datos al formulario': function(cliente) {
		console.log('los datos deben ser llenado previamente');
		cliente
			.click('#botones')
			.assert.containsText('.alert-success', 'caso de prueba creado correctamente!')
		return cliente
	}
};