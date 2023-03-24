import React from 'react'
import { useUserContext } from '@/contexts/userContext'

interface Props { }

const activePageClass = 'bg-gray-50 border-gray-500'
const UserPagination = (props: Props) => {
  const { paginationData, onClickPagination } = useUserContext()
  return (
    <div className='flex items-center justify-center gap-1'>
      {
        paginationData && paginationData.links.map((link, i) => {
          return (
            <button
              key={link.label}
              onClick={
                () => {
                  if (link.url && !link.active)
                    onClickPagination(link.url)
                }
              }
              disabled={link.url == null && !link.active}
              className={`border disabled:text-gray-400 bg-white p-2 hover:bg-gray-300 transition-colors ${link.active && activePageClass}`}
              dangerouslySetInnerHTML={{ __html: link.label }}>
            </button>
          )
        })
      }
    </div >
  )
}

export default UserPagination
