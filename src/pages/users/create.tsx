import { Flex, Box, Heading, Divider, VStack, SimpleGrid, HStack, Button } from '@chakra-ui/react'
import { SideBar } from '../../components/Sidebar'
import { Input } from '../../components/Form/input'
import Link from 'next/link'
import { Header } from '../../components/Header'

export default function CreateUser() {
  return (
    <>
    <Header />
    <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>  
      <SideBar />
      <Box flex='1' boderRadius={8} bg='gray.800' p={['6','8']}>
        <Heading size='lg' fontWeigh='normal'>Create user</Heading>

        <Divider my='6' borderColor='gray.700' />

        <VStack spacing='8'>
          <SimpleGrid minChildWidth='240px' spacing={['6','8']} w='100%'>
            <Input name='name' label='Full name' />
            <Input name='email' label='E-mail' type='email' />
          </SimpleGrid>

          <SimpleGrid minChildWidth='240px' spacing={['6','8']} w='100%'>
            <Input name='password' label='Password' type='password' />
            <Input name='password_confirmation' label='Password confirmation' type='password' />
          </SimpleGrid>
        </VStack>

        <Flex mt='8' justify='flex-end'>
          <HStack spacing='4'>
            <Link href='/users' passHref>
              <Button colorScheme='whiteAlpha'>Cancel</Button>
            </Link>
            <Button colorScheme='pink'>Save</Button>
          </HStack>
        </Flex>
      </Box>
    </Flex>
    </>
  )
}