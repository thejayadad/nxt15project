'use server'

import connectDB from "@/lib/db";
import { Appointment } from "@/model/Appointment";


export const getAllClients = async () => {
  try {
    // Establish database connection
    await connectDB();

    // Fetch all clients for the logged-in user, converting Mongoose documents to plain objects
    const clients = await Appointment.find({})// .lean() strips out the Mongoose methods

    // Return the list of clients
    return JSON.parse(JSON.stringify(clients)); // Deep clone and serialize the data
  } catch (error) {
    console.error("Error fetching clients:", error);
    throw new Error("Failed to fetch clients");
  }
};