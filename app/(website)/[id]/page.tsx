import { userBooking } from '@/lib/action/booking/user-booking'
import { getSession } from '@/lib/getSession';
import { Appointment } from '@/model/Appointment';
import React from 'react'


// userEmail: { type: String, required: true, ref: 'User' }, // Reference to the User model
// appointmentId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Appointment' }, // Reference to the Appointment model
// status: {
//   type: String,
//   enum: ['confirmed', 'pending', 'cancelled'],
//   default: 'pending',
// },
// bookingDate: { type: Date, default: Date.now },
// });

const AppointmentInfoPage = async ({params}) => {
    const session = await getSession();
    const userEmail = session?.user?.email
    const {id} = await params
    const appointId = id
    const appointment = await Appointment.findById(appointId);

    // Check if the user is logged in
    if (!userEmail) {
      return <div>Error: User not logged in</div>;
    }
  return (
    <div>
        {appointId}
        AppointmentInfoPage
        <form action={userBooking}>
        <input id="appointmentId" name="appointmentId" defaultValue={appointId} hidden />
        <input id="userEmail" name="userEmail" defaultValue={userEmail} hidden />
        <input id="status" name="status" placeholder="Status" />
        <span>
        {appointment?.date?.toString()}
        </span>
        <input id="bookingDate" name="bookingDate" type="date" hidden  defaultValue={appointment?.date?.toString()}  />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AppointmentInfoPage