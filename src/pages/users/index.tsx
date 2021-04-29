import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { SideBar } from '../../components/Sidebar'

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex width='100%' my='6' maxWidth={1480} mx='auto'>
        <SideBar />

        <Box flex='1' boderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>Users</Heading>
            <Button
              as='a' 
              size='sm' 
              fontSize='small' 
              colorScheme='pink' 
              leftIcon={<Icon as={RiAddLine} fontSize='20' />}>
              Add new
            </Button>
            
          </Flex>
          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' width='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>User</Th>
                <Th>Register date</Th>
                <Th w='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Lucas Rocha</Text>
                    <Text fontSize='sm' color='gray.300'>ld.rocha@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>27 de Abril, 2021</Td>
                <Td>
                  <Button
                    as='a' 
                    size='sm' 
                    fontSize='small' 
                    colorScheme='purple' 
                    leftIcon={<Icon as={RiPencilLine} fontSize='16' />}>
                      Edit
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}