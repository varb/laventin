import ChevronLeftIcon from 'components/Icon/icons/ChevronLeftIcon';
import { useMatch } from 'react-router-dom';
import {
  Root,
  Logo,
  TopBarLink,
  IconWrap,
} from './styles';

export default function Header() {
  const isHomePage = useMatch('/');

  return (
    <Root>
      {isHomePage ? (
        <Logo />
      ) : (
        <TopBarLink to='/'>
          <IconWrap>
            <ChevronLeftIcon />
          </IconWrap>
          Back
        </TopBarLink>
      )}
    </Root>
  )
}
