import { TextLink } from '../Typography'
import styled from 'styled-components';

export const Root = styled.div`
  display: grid;
  grid-gap: 5px;
  padding-bottom: 60px;

  color: ${(p) => p.theme.colors.text.secondary};
  font-size: 12px;
  line-height: 15px;
  text-align: center;
`;

export default function Footer() {
  return (
    <Root>
      Designed &amp; developed by me
      <div>
        <TextLink href="http://varb.me" target="_blank">varb.me</TextLink>
      </div>
    </Root>
  )
}
