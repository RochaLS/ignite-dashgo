import { Flex, Button, Stack, } from '@chakra-ui/react'
import { Input } from '../components/Form/input'

export default function SignIn() {
  return (
   <Flex
    w='100vw'
    h='100vh'
    align='center'
    justify='center'
   >
     <Flex
      as='form'
      w='100%'
      maxWidth={360}
      bg='gray.800'
      p='8'
      borderRadius={8}
      flexDir='column'
     >
       <Stack spacing='4'>
         <Input name='Email' label='E-mail' type='email'/>
         <Input name='Password' label='Password' type='password'/>
       </Stack>

       <Button
        type='submit'
        mt='6'
        colorScheme='pink'
        size='lg'
       >
         Sign in
       </Button>

     </Flex>
   </Flex>
  )
}
