import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { SideBar } from '../../components/Sidebar'
import React from 'react'
import { useUsers } from '../../services/hooks/useUsers'
import { useState } from 'react'
import { queryClient } from '../../services/queryClient'
import { api } from '../../services/api'

export default function UserList() {

  const [page, setPage] = useState(1)
  const { data, isLoading, error, isFetching } = useUsers(page)

  console.log(page)

  const isWideVersion = useBreakpointValue({
    bade: false,
    lg: true
  })

  async function handlePrefetchUser(userId) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`)

      return response.data
    }, {
      staleTime: 1000 * 60 * 10 //10 min
    })
  }

  return (
    <Box>
      <Header />

      <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <SideBar />

        <Box flex='1' boderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Users
              { !isLoading && isFetching && <Spinner size='sm' color='gray.500' ml='4' />}
            </Heading>
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
              { data.users.map(user => {
                return (
                  <Tr>
                    <Td px={['4','4','6']}>
                      <Checkbox colorScheme='pink' />
                    </Td>
                    <Td>
                      <Box>
                        <ChakraLink color='purple.400' onMouseEnter={() => handlePrefetchUser(user.id)}>
                          <Text fontWeight='bold'>{user.name}</Text>
                        </ChakraLink>
                        <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                      </Box>
                    </Td>
                    { isWideVersion && <Td>{user.createdAt}</Td> }
                  </Tr>
                )
              })}
            </Tbody>
            </Table>
            <Pagination
              totalCountRegisters={data.totalCount}
              currentPage={page}
              onPageChange={setPage} />
          </>
         )
         }
        </Box>
      </Flex>
    </Box>
  )
}