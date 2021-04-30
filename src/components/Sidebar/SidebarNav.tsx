import { Stack } from '@chakra-ui/react'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'
import { RiContactsLine, RiDashboardLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'

export function SidebarNav() {
  return (
    <Stack spacing='12' align='flex-start'>
      <NavSection title='GENERAL'>
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiContactsLine}>Users</NavLink>
      </NavSection>
      <NavSection title='AUTOMATIZATION'>
        <NavLink icon={RiInputMethodLine}>Forms</NavLink>
        <NavLink icon={RiGitMergeLine}>Automation</NavLink>
      </NavSection>
    </Stack>
  )
}