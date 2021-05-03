import { Flex, Button, Stack, } from '@chakra-ui/react'
import { Input } from '../components/Form/input'
import { SubmitHandler, useForm } from 'react-hook-form'

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000) )
    console.log(values)
  }

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
      onSubmit={handleSubmit(handleSignIn)}
     >
       <Stack spacing='4'>
         <Input name='Email' label='E-mail' type='email' {...register('Email')}/>
         <Input name='Password' label='Password' type='password' {...register('Password')}/>
       </Stack>

       <Button
        type='submit'
        mt='6'
        colorScheme='pink'
        size='lg'
        isLoading={formState.isSubmitting}
       >
         Sign in
       </Button>

     </Flex>
   </Flex>
  )
}
