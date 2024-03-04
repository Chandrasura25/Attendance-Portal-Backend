const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { authenticateToken } = require('../utils/authMiddleware');

// Signup Endpoint
router.post('/register', userController.register);

// Login Endpoint
router.post('/login', userController.login);

// Dashboard Endpoint (corrected)
router.get('/dashboard', authenticateToken, userController.dashboard);

module.exports = router;