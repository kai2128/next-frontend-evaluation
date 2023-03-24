import React from 'react'
import { useUserContext } from '@/contexts/userContext'

interface Props {
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
}

const Suggestion = ({ searchText, setSearchText }: Props) => {
  const { users } = useUserContext()
  const shouldShowSuggestion = users !== undefined && users?.length > 0 && searchText !== '' && searchText !== users[0].name
  if (shouldShowSuggestion) {
    return (
      <div className='text-sm text-gray-500'>
        Do you mean <button className='underline hover:text-black transition-colors' onClick={() => setSearchText(users[0].name)}>{users[0].name}</button>
      </div>
    )
  }
  else { return <div className='h-5'></div> }
}

export default Suggestion
