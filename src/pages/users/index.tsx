import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner } from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { SideBar } from '../../components/Sidebar'
import { useQuery } from 'react-query'

export default function UserList() {

  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()

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
  }, {
    staleTime: 1000 * 5 // 5 seconds is how much time the data will be fresh
  })

  const isWideVersion = useBreakpointValue({
    bade: false,
    lg: true
  })
  return (
    <Box>
      <Header />

      <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <SideBar />

        <Box flex='1' boderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>Users</Heading>
            <Link href='/users/create' passHref>
              <Button
                as='a' 
                size='sm' 
                fontSize='small' 
                colorScheme='pink' 
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}>
                Add new
              </Button>
            </Link>
            
          </Flex>
         { isLoading ? (
           <Flex justify='center'>
             <Spinner />
           </Flex>
         ) : error ? (
           <Flex justify='center'>
             <Text>Falha ao obter dados!</Text>
           </Flex>
         ) : (
           <>
            <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['4','4','6']} color='gray.300' width='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>User</Th>
                { isWideVersion && <Th>Register date</Th> }
              </Tr>
            </Thead>
            <Tbody>
              { data.map(user => {
                return (
                  <Tr>
                    <Td px={['4','4','6']}>
                      <Checkbox colorScheme='pink' />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight='bold'>{user.name}</Text>
                        <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                      </Box>
                    </Td>
                    { isWideVersion && <Td>{user.createdAt}</Td> }
                  </Tr>
                )
              })}
            </Tbody>
            </Table>
            <Pagination />
          </>
         )
         }
        </Box>
      </Flex>
    </Box>
  )
}