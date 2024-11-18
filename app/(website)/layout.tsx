import Header from '@/components/header/header';
import FeedWrapper from '@/components/ui/feed-wrapper';
import PageWrapper from '@/components/ui/page-wrapper';
import { getAllClients } from '@/lib/action/booking/get-appointments';
import Link from 'next/link';
import React from 'react'

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
          {/* {appointments.map(appointment => (
            <div key={appointment._id}>
              <div>{appointment.title}</div>
              <div>
                <Link href={`/${appointment._id}`}>
                  Page
                </Link>
              </div>
            </div>
          ))} */}
          <div className='p-4'>
            <div className='w-full bg-orange-300 border px-8 py-12 flex items-center justify-between'>
              <div>
                <h2>Title</h2>
              </div>
            </div>
          </div>
        </FeedWrapper>
        <PageWrapper>{children}</PageWrapper>
      </div>
    </div>
  )
}

export default layout