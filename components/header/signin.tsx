import { signIn } from '@/auth';
import React from 'react'
import { FiUser } from 'react-icons/fi';

const SignIn = () => {
  return (
    <form
    action={async () => {
      "use server";
      await signIn();
    }}
  >
    <button
     className='rounded-lg border p-2 border-secondary'
     type="submit">
      <FiUser className='h-7 w-7 lg:h-4 lg:w-4' />
    </button>
  </form>
  )
}

export default SignIn