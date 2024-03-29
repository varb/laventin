import ChevronLeftIcon from 'components/Icon/icons/ChevronLeftIcon';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.text.secondary};
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  transition: color .2s;
  text-decoration: none;

  &:hover {
    color: ${(p) => p.theme.colors.text.primary};
  }
`;

export const IconWrap = styled.div`
  margin-right: 3px;
  font-size: 26px;
`;

interface BackButtonProps {
  to?: string,
  text?: string,
}

export default function BackButton(props: BackButtonProps) {
  const { to = '/', text = 'Back' } = props;

  return (
    <Root to={to} as={Link}>
      <IconWrap>
        <ChevronLeftIcon />
      </IconWrap>
      {text}
    </Root>
  )
}
