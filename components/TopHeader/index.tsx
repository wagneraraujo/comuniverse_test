import Image from 'next/image'
import {
  ContentTopHeader,
  LogoAndSearch,
  Container,
  NotificationAndUser,
  NotificationIcon,
} from './styles'
import logo from '../../public/logo.svg'
import fakeName from '../../public/name.png'
import { Search, SearchComponent } from '../Search'
import { MdNotifications } from 'react-icons/md'
export const TopHeader = () => {
  return (
    <ContentTopHeader>
      <Container>
        <LogoAndSearch>
          <Image src={logo} width="120" height="31" alt="Logo" />
          <Search />
        </LogoAndSearch>

        <NotificationAndUser>
          <NotificationIcon>
            <MdNotifications size={'36px'} />
            <div className="numberNotification">8</div>
          </NotificationIcon>

          <div className="">
            {' '}
            <Image src={fakeName} width="41" height="32" alt="name" />
          </div>
        </NotificationAndUser>
      </Container>
    </ContentTopHeader>
  )
}
