import React from 'react'

export default function Wrap({ children, ...rest }: { children?: React.ReactNode }) {
  return (
    <div className='flex items-center justify-center' {...rest}>
      <div className='mw flex w-full flex-col items-center justify-center'>{children}</div>
    </div>
  )
}
