import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='flex h-full flex-col items-center justify-center p-4'>
        {children}
    </div>
  )
}

export default layout