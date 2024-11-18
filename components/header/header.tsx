import React from 'react'
import Logo from '../ui/logo'
import { getSession } from '@/lib/getSession';
import AuthLinks from './auth-links';
import MobileMenu from './mobile-menu';
import SignOut from './signout';
import SignIn from './signin';

const Header = async () => {
    const session = await getSession();
  return (
    <header className='w-full border-b fixed'>
        <nav className='flex items-center justify-between space-x-4 mx-auto max-w-screen-xl p-4'>
            <Logo />
            {
                session ? (
                    <>
                        <div className='flex items-center space-x-2'>
                            <AuthLinks />
                            <MobileMenu />
                            <SignOut />
                        </div>
                    </>
                ):

                (
                    <>
                        <SignIn />
                    </>
                )
            }
        </nav>
    </header>
  )
}

export default Header
