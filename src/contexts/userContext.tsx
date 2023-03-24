import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { GetUserReturn, PaginationData, UserData } from '@/types/global'
import { getUsers } from '@/queries/userQuery'

interface IUserContext {
  users: UserData[] | undefined
  paginationData: PaginationData | undefined
  loading: Boolean
  searchUser: (name: string) => void
  onClickPagination: (url: string) => void
}

const UserContext = createContext<IUserContext | null>(null)

interface UserProviderProps {
  children?: React.ReactNode
}
export const UserProvider = ({ children }: UserProviderProps) => {
  const [data, setData] = useState<GetUserReturn | null>()
  const [loading, setLoading] = useState<Boolean>(false)

  const users = useMemo(() => {
    return data?.data
  }, [data])

  const paginationData = useMemo(() => {
    if (data) {
      const { data: users, ...paginationData } = data
      return paginationData
    }
  }, [data])

  const fetchUser = async (fetcher: Function) => {
    setLoading(true)
    const [res, error] = await fetcher()
    setLoading(false)

    if (!error)
      setData(res!)
    else
      console.error('[ERROR] Fetching users: ', error)
  }

  const onClickPagination = async (url: string) => {
    fetchUser(() => getUsers({ fullUrl: url }))
  }

  const searchUser = async (name: string) => {
    fetchUser(() => getUsers({ query: name }))
  }

  useEffect(() => {
    searchUser('')
  }, [])

  return (
    <UserContext.Provider
      value={{
        paginationData,
        users,
        searchUser,
        loading,
        onClickPagination,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (context === null)
    throw new Error('useUserContext must be used within a UserProvider')

  return context
}
