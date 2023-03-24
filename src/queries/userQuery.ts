import type { GetUserReturn } from '@/types/global'

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://fetest.mashx.click/api/users'

export const getUsers = async ({ query = '', fullUrl = '' }): Promise<[GetUserReturn | null, unknown]> => {
  const url = new URL(fullUrl || BASE_URL)
  if (!fullUrl)
    url.searchParams.append('query', query)

  try {
    const res = await fetch(url)
    return [await res.json(), null]
  }
  catch (error) {
    return [null, error]
  }
}
