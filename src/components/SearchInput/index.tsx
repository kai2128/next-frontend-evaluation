import React, { useEffect, useRef, useState } from 'react'
import Suggestion from './Suggestion'
import { useUserContext } from '@/contexts/userContext'

function SearchInput() {
  const { searchUser } = useUserContext()
  const [searchText, setSearchText] = useState('')
  const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }
  useEffect(() => {
    searchUser(searchText)
  }, [searchText])
  const inputRef = useRef<HTMLInputElement>(null)
  function focusInput() {
    inputRef.current?.focus()
  }
  useEffect(() => {
    document.addEventListener('keypress', focusInput)
    return () => document.removeEventListener('keypress', focusInput)
  }, [])
  return (
    <div className='w-full flex justify-center'>
      <label className='flex flex-col bg-white mx-4 md:mx-10 max-w-[700px] flex-1 px-6 py-2'>
        <div>Enter Name To search:</div>
        <input ref={inputRef} type="text" placeholder='name' className='border border-gray-700 p-2 w-full' value={searchText} onChange={onSearchTextChange} />
        <Suggestion searchText={searchText} setSearchText={setSearchText}></Suggestion>
      </label>
    </div>
  )
}

export default SearchInput
