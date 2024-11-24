export interface LoginAdmin {
    message: string
    user: User
    status: number
  }
  
  export interface User {
    id: string
    user_name: string
    suppliers: string
    last_access_date: string
    state: string
    created_at: string
    updated_at: string
  }
  