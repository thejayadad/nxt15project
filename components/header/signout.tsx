import { signOut } from '@/auth';
import React from 'react'
import { FiLogOut } from 'react-icons/fi';

const SignOut = async () => {
  return (
    <form
    action={async () => {
      "use server";
      await signOut();
    }}
  >
    <button
    className='rounded-lg border p-2 border-secondary'
    type="submit">
      <FiLogOut className='h-7 w-7 lg:h-4 lg:w-4' />
    </button>
  </form>
  )
}

export default SignOut