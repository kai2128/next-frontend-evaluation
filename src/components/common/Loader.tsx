import React from 'react'
import { useUserContext } from '@/contexts/userContext'

interface Props {}

const loadedClass = 'text-gray-700/50'

const Loader = (props: Props) => {
  const { loading } = useUserContext()
  return (
    <div className={`font-mono text-lg ${loading ? '' : loadedClass}`}>
      <div className='relative'>
        {loading ? 'Loading' : 'Loaded'}
        {
          loading
          && <div className='absolute -right-7 top-0'>
            <div className='relative overflow-hidden'>
              ...
              <div className='absolute inset-0 w-full h-full bg-background animate-move-left'></div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Loader
