'use server'

import connectDB from "@/lib/db"
import { Appointment } from "@/model/Appointment";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


// date: { type: Date, required: true },
// time: { type: String, required: true },
// title: { type: String, required: true },
// category: { type: String, required: true },
// description: { type: String, required: true },
// serviceType: { type: String, required: true },
// userEmail: { type: String, required: true, ref: 'User' }, // Reference to the User model

export const addAppointment = async (formData: FormData) => {
    const { date, time, title, category, description, serviceType, userEmail } = Object.fromEntries(formData);
    try {
        await connectDB()
        const newClient = await Appointment.create({
            date, time, title, category, description, serviceType,
            userEmail, // Save the userEmail along with the client data
          });

    } catch (error) {
        console.log("Error: ", error);
        throw new Error("Something went wrong .  " + error);
    }
    revalidatePath('/')
    redirect('/')


}