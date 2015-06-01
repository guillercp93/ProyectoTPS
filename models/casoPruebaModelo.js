var mongoose = require('mongoose');

var CasoPruebaSchema = new mongoose.Schema({
  proyecto: {type: String},
  id: {type: String},
  nombre: {type: String},
  descripcion: {type: String},
  precondicion: {type: String},
  casoDeUso: {type: String},
  pasosEjecucion: {type: String},
  resultadosEsperados: {type: String},
  estado: {type: String},
  resultadosObtenidos: {type: String},
  errores: {type: String},
  responsableDisenio: {type: String},
  responsableEjecucion: {type: String},
  comentarios: {type: String}
});

module.exports = mongoose.model('casoPrueba', CasoPruebaSchema);