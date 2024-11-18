'use server'
import { Booking } from "@/model/Booking"
import connectDB from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


// userEmail: { type: String, required: true, ref: 'User' }, // Reference to the User model
// appointmentId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Appointment' }, // Reference to the Appointment model
// status: {
//   type: String,
//   enum: ['confirmed', 'pending', 'cancelled'],
//   default: 'pending',
// },
// bookingDate: { type: Date, default: Date.now },

export const userBooking = async (formData: FormData) => {
    const { appointmentId, status, bookingDate, userEmail } = Object.fromEntries(formData);

    try {
        const newClient = await Booking.create({
            appointmentId, status,bookingDate, userEmail, // Save the userEmail along with the client data
          });

    } catch (error) {
        console.log("Error: ", error);
        throw new Error("Something went wrong .  " + error);
    }
    revalidatePath('/')
    redirect('/')



}