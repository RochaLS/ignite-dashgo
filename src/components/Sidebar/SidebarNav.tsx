import { Stack } from '@chakra-ui/react'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'
import { RiContactsLine, RiDashboardLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'

export function SidebarNav() {
  return (
    <Stack spacing='12' align='flex-start'>
      <NavSection title='GENERAL'>
        <NavLink href='/dashboard' icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink href='/users' icon={RiContactsLine}>Users</NavLink>
      </NavSection>
      <NavSection title='AUTOMATIZATION'>
        <NavLink href='/forms' icon={RiInputMethodLine}>Forms</NavLink>
        <NavLink href='/automation' icon={RiGitMergeLine}>Automation</NavLink>
      </NavSection>
    </Stack>
  )
}