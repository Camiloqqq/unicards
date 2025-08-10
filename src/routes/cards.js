const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cardsController');

router.get('/:userId', cardsController.getUserCards);
router.post('/', cardsController.addCard);

module.exports = router;
