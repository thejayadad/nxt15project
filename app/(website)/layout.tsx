import AppointmentCard from '@/components/event-card/appointment-card';
import Header from '@/components/header/header';
import FeedWrapper from '@/components/ui/feed-wrapper';
import PageWrapper from '@/components/ui/page-wrapper';
import { getAllClients } from '@/lib/action/booking/get-appointments';
import { Key } from 'react';



const layout = async ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const appointments = await getAllClients()

  return (

    <div>
      <Header />
      <div className="flex-1 max-w-screen-xl mx-auto flex flex-col lg:flex-row custom-scrollbar">
        <FeedWrapper>
          <div className='p-4 flex flex-col space-y-6'>
            <h1>View the Latest Listings</h1>
            {appointments.map((appointment: { _id: Key | null | undefined; title: string; userEmail: string; category: string; userImage: string; }) => (
              <AppointmentCard
                id={appointment._id}
                key={appointment._id}
                title={appointment.title}
                userEmail={appointment.userEmail}
                category={appointment.category}
                userImage={appointment.userImage} // Ensure userImage is passed in
              />
            ))}
          </div>
        </FeedWrapper>
        <PageWrapper>{children}</PageWrapper>
      </div>
    </div>
  )
}

export default layout