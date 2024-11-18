import mongoose from 'mongoose';

// Create the appointment schema
const appointmentSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  serviceType: { type: String, required: true },
  userEmail: { type: String, required: true, ref: 'User' }, // Reference to the User model
});

// Create the appointment model
export const Appointment = mongoose.models?.Appointment || mongoose.model('Appointment', appointmentSchema);
