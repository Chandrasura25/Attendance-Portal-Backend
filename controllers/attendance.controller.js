const User = require('../models/user.model');
const Attendance = require('../models/attendance.model');

exports.create = async (req, res) => {
  try {
    const { date, user_id, studentId, status } = req.body;
    const attendance = new Attendance({ date, user_id, studentId, status });
    await attendance.save();
    res.status(201).json({ message: 'Attendance record created successfully', attendance });
  } catch (error) {
    console.error('Error creating attendance record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all attendance records
exports.read = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find();
    res.json(attendanceRecords);
  } catch (error) {
    console.error('Error retrieving attendance records:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get attendance record by ID
exports.readById = async (req, res) => {
  try {
    const attendanceRecord = await Attendance.findById(req.params.id);
    if (!attendanceRecord) {
      return res.status(404).json({ error: 'Attendance record not found' });
    }
    res.json(attendanceRecord);
  } catch (error) {
    console.error('Error retrieving attendance record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update attendance record
exports.update = async (req, res) => {
  try {
    const { date, user_id, studentId, status } = req.body;
    const updatedAttendanceRecord = await Attendance.findByIdAndUpdate(req.params.id, { date, user_id, studentId, status }, { new: true });
    if (!updatedAttendanceRecord) {
      return res.status(404).json({ error: 'Attendance record not found' });
    }
    res.json({ message: 'Attendance record updated successfully', attendance: updatedAttendanceRecord });
  } catch (error) {
    console.error('Error updating attendance record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete attendance record
exports.delete = async (req, res) => {
  try {
    const deletedAttendanceRecord = await Attendance.findByIdAndDelete(req.params.id);
    if (!deletedAttendanceRecord) {
      return res.status(404).json({ error: 'Attendance record not found' });
    }
    res.json({ message: 'Attendance record deleted successfully' });
  } catch (error) {
    console.error('Error deleting attendance record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

