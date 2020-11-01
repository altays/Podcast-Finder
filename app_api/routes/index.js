const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main')

router
    .route('/podcasts')
    // .post(ctrlMain.podcastCreate)
    .get(ctrlMain.podcastSearchInit)

router
    .route('/podcasts/:searchCriteria')
    .get(ctrlMain.podcastSearchDB)

module.exports = router;