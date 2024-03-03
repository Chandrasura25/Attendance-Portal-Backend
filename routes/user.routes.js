const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { authenticateToken } = require('../utils/authMiddleware');

// Signup Endpoint
router.post('/signup', userController.signup);

// Login Endpoint
router.post('/login', userController.login);

// Dashboard Endpoint (corrected)
router.get('/dashboard', authenticateToken, userController.profile);

module.exports = router;