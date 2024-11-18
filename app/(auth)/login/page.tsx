import React from 'react'
import LoginForm from '../_components/form/login-form'
import { getSession } from '@/lib/getSession';
import { redirect } from 'next/navigation';

const LoginPage = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/");
  return (
    <div>
      <div>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage