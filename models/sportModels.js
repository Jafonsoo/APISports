const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SportsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  naciocalidade: {
    type: String,
    required: true,
  },
  equipa: {
    type: String,
    required: true,
  },
  funcao: {
    type: String,
    required: true,
  },
  datacovid: {
    type: String,
    required: true,
    format: "DD/MM/YY"
  },
  estadoatual: {
    type: String,
    required: true,
  },
  
});

// Exportar Dados Model
var Sport = module.exports = mongoose.model('Sport', SportsSchema);

module.exports.get = function (callback, limit) {
  Sport.find(callback).limit(limit);
}