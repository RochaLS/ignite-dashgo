import { Flex, Box, Heading, Divider, VStack, SimpleGrid, HStack, Button } from '@chakra-ui/react'
import { SideBar } from '../../components/Sidebar'
import { Input } from '../../components/Form/input'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import { api } from '../../services/api'
import { queryClient } from '../../services/queryClient'
import { useRouter } from 'next/router'

type CreateUserFormData = {
  name: string;
  password: string;
  password_confirmation: string;
  email: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Name required!'),
  email: yup.string().required('E-mail required!').email('Invalid E-mail'),
  password: yup.string().required('Password required!').min(6, 'Min 6 characters!'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'Passwords needs to match')
})


export default function CreateUser() {
  const router = useRouter()

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users', {
      user: {
        ...user,
        created_at: new Date(),
      }
    })

    return response.data.user
  }, {
    onSuccess : () => {
      queryClient.invalidateQueries('users')
    }
  })

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const errors = formState.errors

  console.log(errors)

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await createUser.mutateAsync(values)

    router.push('/users')
  }

  return (
    <>
    <Header />
    <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>  
      <SideBar />
      <Box
        as='form' 
        flex='1' 
        borderRadius={8} 
        bg='gray.800' 
        p={['6','8']}
        onSubmit={handleSubmit(handleCreateUser)}
      >
        <Heading size='lg' fontWeight='normal'>Create user</Heading>

        <Divider my='6' borderColor='gray.700' />

        <VStack spacing='8'>
          <SimpleGrid minChildWidth='240px' spacing={['6','8']} w='100%'>
            <Input
              name='name' 
              label='Full name'
              {...register('name')}
              error={errors.name}
            />
            <Input 
              name='email' 
              label='E-mail' 
              type='email' 
              {...register('email')}
              error={errors.email}
            />
          </SimpleGrid>

          <SimpleGrid minChildWidth='240px' spacing={['6','8']} w='100%'>
            <Input 
              name='password' 
              label='Password' 
              type='password'
              {...register('password')}
              error={errors.password}
            />
            <Input 
              name='password_confirmation' 
              label='Password confirmation' 
              type='password'
              {...register('password_confirmation')}
              error={errors.password_confirmation}
            />
          </SimpleGrid>
        </VStack>

        <Flex mt='8' justify='flex-end'>
          <HStack spacing='4'>
            <Link href='/users' passHref>
              <Button colorScheme='whiteAlpha'>Cancel</Button>
            </Link>
            <Button type='submit' colorScheme='pink' isLoading={formState.isSubmitting}>Save</Button>
          </HStack>
        </Flex>
      </Box>
    </Flex>
    </>
  )
}