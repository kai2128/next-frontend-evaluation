import React from 'react'
import type { UserData } from '@/types/global'

interface Props extends UserData {
  showDetails: boolean
}

const UserItem = ({ name, email, showDetails, id, email_verified_at, created_at, updated_at }: Props) => {
  return (
    <>
      <div className='flex justify-between w-full items-end'>
        <div className='font-semibold text-lg'>
          {name}
        </div>
        <div className='text-sm'>
          {email}
        </div>
      </div>
      {
        showDetails
        && <>
          <div className='flex justify-between w-full items-end'>
            <div>
              <span className='uppercase text-gray-500'>ID: </span>
              <span className='text-lg'>{id}</span>
            </div>
            <div>
              <span className='uppercase text-gray-500'>email verified at: </span>
              <span className='text-lg'>{new Date(email_verified_at).toLocaleString()}</span>
            </div>
          </div>
          <div className='flex justify-between w-full items-end text-xs'>
            <div>
              <span className='uppercase text-gray-500'>Created: </span>
              <span className=''>{new Date(created_at).toLocaleDateString()}</span>
            </div>
            <div>
              <span className='uppercase text-gray-500'>Updated: </span>
              <span className=''>{new Date(updated_at).toLocaleString()}</span>
            </div>
          </div>
          </>
      }
    </>
  )
}

export default UserItem
