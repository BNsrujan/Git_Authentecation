const express = require('express');
const { storeOsName } = require('../controllers/osController');

const router = express.Router();

router.post('/', storeOsName);

module.exports = router;
