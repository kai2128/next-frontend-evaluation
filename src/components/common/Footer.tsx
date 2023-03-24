import Link from 'next/link'
import React from 'react'

interface Props { }

const Footer = (props: Props) => {
  return (
    <div className='mt-10 pt-10 pb-7 w-full bg-slate-100 text-center'>
      <div className='flex gap-x-5 gap-y-2 justify-center flex-col'>
        <Link className='link' href='https://github.com/kai2128/next-frontend-evaluation' target={'_blank'} referrerPolicy='no-referrer'>GitHub Repo</Link>
        <Link className='link' href='https://github.com/kai2128' target={'_blank'} referrerPolicy='no-referrer'>@kai2128</Link>
      </div>
    </div>
  )
}

export default Footer
