import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'
import { Header } from "../components/Header"
import { SideBar } from '../components/Sidebar'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'
import { GetServerSideProps } from 'next'
import { getUsers } from '../services/hooks/useUsers'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-04-21T20:33:26Z',
      '2021-04-22T20:33:26Z',
      '2021-04-23T20:33:26Z',
      '2021-04-24T20:33:26Z',
      '2021-04-25T20:33:26Z',
      '2021-04-26T20:33:26Z',
      '2021-04-27T20:33:26Z',
    ]
  }
}

const series = [
  { name: 'series1', data: [20, 5, 31, 40, 100, 80, 95] }
]

export default function Dashboard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />
      <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <SideBar />
        <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
          <Box
            p={['6','8']}
            bg='gray.800'
            borderRadius={8}
            pb='4'
          >
            <Text fontSize='lg' mb='4'>Week subscriptions</Text>
            <Chart options={options} series={series} type='area' height={160} />
          </Box>
          <Box
            p={['6','8']}
            bg='gray.800'
            borderRadius={8}
            pb='4'
          >
            <Text fontSize='lg' mb='4'>Retention</Text>
            <Chart options={options} series={series} type='area' height={160} /> 
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  ) 
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { users, totalCount } = await getUsers(1)


  return {
    props: {
      users,
    }
  }
}