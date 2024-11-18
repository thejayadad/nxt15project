'use client'
import { addAppointment } from '@/lib/action/user/appointment/add-appointment'
import React from 'react'

interface Props {
    userEmail: string;
}

const AppointmentForm = ({ userEmail }: Props) => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form action={addAppointment} className="space-y-4">
        <input
          id="userEmail"
          name="userEmail"
          type="hidden"
          defaultValue={userEmail}
        />

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Date..."
            className="mt-2 p-2 w-full border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
          <input
            name="time"
            id="time"
            placeholder="Time..."
            className="mt-2 p-2 w-full border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            name="title"
            id="title"
            placeholder="Title..."
            className="mt-2 p-2 w-full border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input
            name="category"
            id="category"
            placeholder="Category..."
            className="mt-2 p-2 w-full border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            id="description"
            rows={5}
            placeholder="Description..."
            className="mt-2 p-2 w-full border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">Service Type</label>
          <input
            name="serviceType"
            id="serviceType"
            placeholder="Service Type..."
            className="mt-2 p-2 w-full border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AppointmentForm
