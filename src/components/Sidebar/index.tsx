import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, useBreakpointValue, DrawerOverlay } from '@chakra-ui/react'
import { useSidebarDrawer } from '../../contexts/SideBarDrawerContext'
import { SidebarNav } from './SidebarNav'

export function SideBar() {

  const { onClose, isOpen } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg='gray.800' p='4'>
        <DrawerCloseButton mt='6' />
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
    )
    
  }
  return (
    <Box w='64' mr='8'>
      <SidebarNav />
    </Box>
  )
}