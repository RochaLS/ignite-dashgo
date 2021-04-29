import { Flex, Box, Heading, Divider, VStack, SimpleGrid, HStack, Button } from '@chakra-ui/react'
import { SideBar } from '../../components/Sidebar'
import { Input } from '../../components/Form/input'

export default function CreateUser() {
  return (
    <Flex width='100%' my='6' maxWidth={1480} mx='auto'>  
      <SideBar />
      <Box flex='1' boderRadius={8} bg='gray.800' p='8'>
        <Heading size='lg' fontWeigh='normal'>Create user</Heading>

        <Divider my='6' borderColor='gray.700' />

        <VStack spacing='8'>
          <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
            <Input name='name' label='Full name' />
            <Input name='email' label='E-mail' type='email' />
          </SimpleGrid>

          <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
            <Input name='password' label='Password' type='password' />
            <Input name='password_confirmation' label='Password confirmation' type='password' />
          </SimpleGrid>
        </VStack>

        <Flex mt='8' justify='flex-end'>
          <HStack spacing='4'>
            <Button colorScheme='whiteAlpha'>Cancel</Button>
            <Button colorScheme='pink'>Save</Button>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  )
  
}