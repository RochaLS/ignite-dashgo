import { api } from '../api'
import { useQuery } from 'react-query'

type User = {
  name: string;
  email: string;
  id: string;
  created_at: string;

}

export async function getUsers(): Promise<User[]> {
    const { data } = await api.get('users')

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('en-CA', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }) 
      }
    })

    return users
}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5 // 5 seconds is how much time the data will be fresh
  })
}