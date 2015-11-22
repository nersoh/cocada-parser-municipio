var csv = require('csv'),
    fs  = require('fs');

/**
 * Parser to CSV files generated from table PAR_TB_MUNICIPIOS.
 */
var parser = module.exports = {
  parseFile: function(fileName, callback) {
    fs.readFile(fileName, 'utf-8', parseCSV);
    function parseCSV(error, fileContent) {
      if (!error) {
        callback(error);
      }
      csv.parse(fileContent, {delimiter: ';', columns: true}, transformCSVObjects);
    }
    function transformCSVObjects(error, data) {
      if (!error) {
        callback(error);
      }
      var municipios = data.map(function(municipio) {
        console.log(municipio);
        return parser.createFromLegacy(municipio);
      });
      callback(null, municipios);
    }s
  },
  createFromLegacy: function(legacyObject) {
    return {
      type: 'municipio',
      title: legacyObject.DS_MUNICIPIO,
      uf: legacyObject.UF_MUNICIPIO,
      legacy: {
        CD_MUNICIPIO: legacyObject.CD_MUNICIPIO
      }
    };
  }
}