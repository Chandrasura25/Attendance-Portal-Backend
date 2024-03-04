
const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendance.controller');
router.post('/attendance', attendanceController.create);

router.get('/attendance', attendanceController.read);
router.get('/attendance/:id', attendanceController.readById);
// Route for updating attendance record
router.post('/attendance/:id', attendanceController.update);

// Route for deleting attendance record
router.delete('/attendance/:id', attendanceController.delete);

module.exports = router;