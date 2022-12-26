const express = require('express');
const controller = require('../controllers/tradeController');

const router = express.Router();

router.get('/', controller.index);

//GET /trades/new: send html form for creating new trades

router.get('/newTrade', controller.new);

//POST /trades: create a new trade

router.post('/', controller.create);

//GET /trades/:id: send details of story identified by the id
router.get('/:id', controller.show);

//GET /trades/:if/edit: send HTML form for editing an existing trade
router.get('/:id/edit', controller.edit);

//PUT /trades/:id: update trade identified by the id
router.put('/:id', controller.update);

//DELETE /trades/:id: delete trade identified by the id
router.delete('/:id', controller.delete);


module.exports = router;