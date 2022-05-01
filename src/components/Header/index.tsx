import ChevronLeftIcon from 'components/Icon/icons/ChevronLeftIcon';
import { useMatch, useNavigate } from 'react-router-dom';
import {
  Root,
  Logo,
  TopBarLink,
  IconWrap,
} from './styles';

export default function Header() {
  const isHomePage = useMatch('/');
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  }

  return (
    <Root>
      {isHomePage ? (
        <Logo />
      ) : (
        <TopBarLink onClick={onBackButtonClick}>
          <IconWrap>
            <ChevronLeftIcon />
          </IconWrap>
          Back
        </TopBarLink>
      )}
    </Root>
  )
}
