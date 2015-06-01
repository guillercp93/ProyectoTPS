module.exports = function(app) {
  
  var CasoPrueba = require('../models/casoPruebaModelo.js');

  //GET - retorna todos los casos de prueba
  findAllCP = function(req, res) {
  	CasoPrueba.find(function(err, casosPruebas) {
  		if(!err) {
  			res.render('index', {title: 'Inicio', data: casosPruebas});
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //POST - Inserta un nuevo caso de prueba en la BD
  addCP = function(req, res) {
    console.log(req.body);
  	var casoPrueba = new CasoPrueba({
        proyecto:req.body.nProyecto,
        id:req.body.idCasoPrueba,
        nombre: req.body.nombreCP,
        descripcion:req.body.descripcion,
        precondicion:req.body.Precondiciones,
        casoDeUso:req.body.casosUso,
        pasosEjecucion:req.body.pasosEjecucion,
        resultadosEsperados:req.body.rEsperados,  
        estado:req.body.estado,
        resultadosObtenidos:req.body.rObtenidos,
        errores:req.body.errores,
        responsableDisenio:req.body.diseniador,
        responsableEjecucion:req.body.ejecutor,
        comentarios:req.body.comentario
  	});

  	casoPrueba.save(function(err, casoPrueba) {
  		if(!err) {
  			res.redirect('/');
  		} else {
  			return res.send(500, err.message);
  		}
  	});
  };

  //PUT - Modifica un caso de prueba existente
  updateCP = function(req, res) {
    console.log(req.body);
  	CasoPrueba.update({"id": req.params.id},{
        proyecto:req.body.nProyecto,
        id:req.params.id,
        nombre: req.body.nombreCP,
        descripcion:req.body.descripcion,
        precondicion:req.body.Precondiciones,
        casoDeUso:req.body.casosUso,
        pasosEjecucion:req.body.pasosEjecucion,
        resultadosEsperados:req.body.rEsperados,
        estado:req.body.estado,
        resultadosObtenidos:req.body.rObtenidos,
        errores:req.body.errores,
        responsableDisenio:req.body.diseniador,
        responsableEjecucion:req.body.ejecutor,
        comentarios:req.body.comentario
    }, {overwrite: true}, function(err) {
      if (!err) {
        res.redirect('/');
      }else{
        console.log('No se pudo actualizar');
      }
    });
  }

  //DELETE - Elimina un caso de prueba especificado
  deleteCP = function(req, res) {
  	CasoPrueba.findOne({"id": req.params.id}, function(err, casosPruebas) {
  		casosPruebas.remove(function(err) {
  			if(!err) {
  				res.redirect('/');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/', findAllCP);

  app.get('/new', function(req, res) {
    res.render('new', {title: 'Nuevo'});
  });
  
  app.get('/details/:id', function(req, res) {
    CasoPrueba.find({"id": req.params.id}, function(err, casosPruebas) {
      if(!err) {
        res.render('details', {title: req.params.id, data: casosPruebas});
      } else {
        console.log('ERROR: ' + err);
      }
    });
  });

  app.post('/new', addCP);

  app.get('/edit/:id', function(req, res) {
    CasoPrueba.find({"id": req.params.id}, function(err, casosPruebas) {
      if(!err) {
        res.render('edit', {title: "Caso Prueba"+req.params.id, data: casosPruebas});
      } else {
        console.log('ERROR: ' + err);
      }
    });
  });
  app.post('/edit/:id', updateCP);
  app.get('/deleted/:id', deleteCP);
}