
const mongoose = require('mongoose');

const AvailabilitySchema = new mongoose.Schema({
    professorId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    startTime: Date,
    endTime: Date,
    isBooked: {type: Boolean, default: false}
})
module.exports = mongoose.model('Availability', AvailabilitySchema);