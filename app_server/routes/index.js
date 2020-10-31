const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main')

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/search/:podSearch',ctrlMain.indexSearch)
router.get('/about', ctrlMain.about);

module.exports = router;
