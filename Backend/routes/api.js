const express = require('express');
const { storeOsName } = require('../controllers/osController');
const { storeTerminalName } = require('../controllers/terminalController'); // Ensure correct import

const router = express.Router();

// Define different paths for the two routes
router.post('/os', storeOsName);  // POST /api/os/osname
router.post('/terminal', storeTerminalName);  // POST /api/os/terminal

module.exports = router;
