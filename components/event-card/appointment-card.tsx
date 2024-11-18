import Link from 'next/link';
import React from 'react';

interface Props {
  title: string;
  userEmail: string;
  category: string;
  id: string;
  userImage: string;
}

const AppointmentCard = ({ title, userEmail, category, userImage, id }: Props) => {
  return (
    <div className="w-full border bg-white rounded-lg transition duration-300 hover:shadow-lg p-6 flex items-center space-x-6">
      <div className="flex-shrink-0">
        {/* User Image */}
        <img
          src={userImage || '/default-avatar.png'} // Use a default image if no user image is provided
          alt={title}
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>

      <div className="flex-1">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

        {/* User Email */}
        <p className="text-sm text-gray-500 mt-1">{userEmail}</p>

        {/* Category */}
        <p className="text-sm text-blue-600 mt-2">{category}</p>
      </div>

      <div>
        {/* You can add buttons or links here, like View Details */}
        <Link href={`/${id}`} className="text-blue-500 font-medium">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AppointmentCard;
