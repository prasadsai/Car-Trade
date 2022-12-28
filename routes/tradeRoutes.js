const express = require('express');
const controller = require('../controllers/tradeController');
const { isLoggedIn, isAuthor } = require('../middlewares/auth');
const { validateId } = require('../middlewares/validator');
const router = express.Router();


router.get('/', controller.index);

//GET /trades/new: send html form for creating new trades
router.get('/newTrade', isLoggedIn, controller.new);

//POST /trades: create a new trade
router.post('/', isLoggedIn, controller.create);

//GET /trades/:id: send details of story identified by the id
router.get('/:id', validateId, controller.show);

//GET /trades/:if/edit: send HTML form for editing an existing trade
router.get('/:id/edit', validateId, isLoggedIn, isAuthor, controller.edit);

//PUT /trades/:id: update trade identified by the id
router.put('/:id', validateId, isLoggedIn, isAuthor, controller.update);

//DELETE /trades/:id: delete trade identified by the id
router.delete('/:id', validateId, isLoggedIn, isAuthor, controller.delete);

module.exports = router;