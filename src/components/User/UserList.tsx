import React from 'react'
import UserItem from './UserItem'
import type { UserData } from '@/types/global'

interface Props {
  users: UserData[] | undefined
}

const UserList = ({ users }: Props) => {
  return (
    <>
      <div className='flex-1 flex flex-col outline outline-gray-400 outline-offset-4 border bg-white border-gray-300 my-4 w-full md:w-1/2 items-center py-3 px-5 max-w-[700px] gap-y-1 overflow-y-auto'>
        {
          (users && users?.length > 0)
            ? users.map((u, i) =>
              (
              <>
                <UserItem key={u.id} {...u} showDetails={users.length === 1}></UserItem>
                {i !== users.length - 1 && <div className='h-[0.5px] bg-slate-600/10 w-full flex-shrink-0 my-1'></div>}
              </>
              ),
            )
            : <div className='font-mono text-gray-400'>No user found.</div>
        }
      </div>
    </>
  )
}

export default UserList
