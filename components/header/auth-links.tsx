
import React from 'react'
import AuthLinkItems from './auth-link-item';

const routes = [
    {
      label: 'Events',
      href: '/',
    },
    {
        label: 'Post',
        href: '/post',
      },
    {
      label: 'MyEvents',
      href: '/myevents',
    },
    {
      label: 'MyBookings',
      href: '/mybooking',
    },
  ];

const AuthLinks = () => {
  return (
    <div
    className='hidden md:block items-center space-x-3'
    >
        {routes.map(route => (
            <AuthLinkItems
            label={route.label}
            href={route.href}
            key={route.label}
            />
        ))}
    </div>
  )
}

export default AuthLinks