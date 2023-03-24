export interface UserData {
  id: number
  name: string
  email: string
  email_verified_at: string
  created_at: string
  updated_at: string
}

export interface getUserParam {
  query: string
}

export interface GetUserReturn extends PaginationData {
  data: UserData[]
}

export interface PaginationData {
  current_page: number
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: Link[]
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: null
  to: number
  total: number
}

export interface Link {
  url: null | string
  label: string
  active: boolean
}
