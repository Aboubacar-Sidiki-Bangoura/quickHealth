const express = require('express');
const router = express.Router();
const { authenticate } = require('./verifyToken');

router.get('/', authenticate, (request, response) => response.send(request.user));
router.post('/', (request, response) => response.send('Greetings form QuickHealth API'));

module.exports = router;
