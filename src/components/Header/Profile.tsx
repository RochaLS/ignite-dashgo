import { Flex, Box, Text, Avatar } from '@chakra-ui/react' 

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      { showProfileData && (
        <Box mr='4' textAlign='right'>
        <Text>Lucas Rocha</Text>
          <Text
            color='gray.300' fontSize='small'
          >
            ld.rocha@hotmail.com
          </Text>
      </Box>
      )}
      <Avatar size='md' name='Lucas Rocha' src='https://github.com/RochaLS.png' />
    </Flex>
  )
}