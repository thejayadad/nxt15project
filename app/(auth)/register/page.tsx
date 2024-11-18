import React from 'react'
import RegisterForm from '../_components/form/register-form'

const RegisterPage = () => {
  return (
    <div>
      <div className='flex flex-col space-y-8 p-6'>
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage