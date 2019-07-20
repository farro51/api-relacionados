var express = require('express');
var router = express.Router();

const declarantes = [{
  id: 12345,
  relacionados: [
    { id: 2345, relacion: 'Padre' },
    { id: 567, relacion: 'Madre' },
    { id: 101817, relacion: 'Hijo' },
    { id: 37498, relacion: 'Hermano' },
    { id: 237894, relacion: 'Sobrino' }
  ]
},
{
  id: 98765,
  relacionados: [
    { id: 34263, relacion: 'Padre' },
    { id: 90834, relacion: 'Abuelo' },
    { id: 9042, relacion: 'Tío' }
  ]
},
{
  id: 3647268,
  relacionados: [
    { id: 10928, relacion: 'Madre' },
    { id: 478290, relacion: 'Abuela' },
    { id: 100734, relacion: 'Primo' }
  ]
}];


/* GET relaciones listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:idDeclarante/:idRelacionado', (req, res, next) => {
  const declarante = declarantes.find(d => d.id === parseInt(req.params.idDeclarante));
  let relacionado = undefined;
  if(declarante) {
    relacionado = declarante.relacionados.find(r => r.id === parseInt(req.params.idRelacionado));
  } 
  res.send({ idDeclarante: req.params.idDeclarante, idRelacionado: req.params.idRelacionado, relacion: (relacionado) ? relacionado.relacion : 'NO_RELACIONADO'});
});

module.exports = router;
