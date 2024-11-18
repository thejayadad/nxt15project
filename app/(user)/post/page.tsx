import React from 'react'
import AppointmentForm from '../_components/form/appointment-form'
import { getSession } from '@/lib/getSession';


const PostEventPage = async () => {
    const session = await getSession();
    const userEmail = session?.user?.email
    if (!userEmail) {
        return <div>Error: User not logged in</div>;
    }
  return (
    <div>
        {userEmail}
        <AppointmentForm
        userEmail={userEmail}
        />
    </div>
  )
}

export default PostEventPage