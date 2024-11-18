import mongoose from 'mongoose';

// Create the booking schema
const bookingSchema = new mongoose.Schema({
  userEmail: { type: String, required: true, ref: 'User' }, // Reference to the User model
  appointmentId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Appointment' }, // Reference to the Appointment model
  status: {
    type: String,
    enum: ['confirmed', 'pending', 'cancelled'],
    default: 'pending',
  },
  bookingDate: { type: Date, default: Date.now },
});

// Create the booking model
export const Booking = mongoose.models?.Booking || mongoose.model('Booking', bookingSchema);
