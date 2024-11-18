import React from 'react'
import { FormWapper } from './form-wrapper'
import { SubmitButton } from './submit-button'
import { cookies } from "next/headers";
import { login } from '@/lib/action/user/login-user';


const LoginForm = async () => {
  const csrfToken = (await cookies()).get("authjs.csrf-token")?.value ?? "";

  return (
    <FormWapper
    titleLabel='Hey there, Welcome Back!'
    backButtonLabel='Need an account?'
    backButtonHref='/register'
    showSocial
    >
        <form
          action={login}
        >
          <input type="hidden" name="csrfToken" value={csrfToken} />
            <div className='flex flex-col gap-1'>
            <span className="label-text">Email</span>
            <input id='email' name='email' type="text" placeholder="Email..." className="input input-bordered w-full" />
             </div>
             <div className='flex flex-col gap-1'>
             <span className="label-text">Password</span>
            <input name='password' id='password' type="password" placeholder="Password..." className="input input-bordered w-full" />
                <SubmitButton label='Login' />
             </div>
        </form>
    </FormWapper>
  )
}

export default LoginForm