import { SVGUniqueID } from 'react-svg-unique-id';
import { Root } from './styles';

export interface StyledIconProps {
  inline?: boolean;
  stroked?: boolean;
  block?: boolean;
}

interface RootIconProps {
  children: React.ReactNode
}

export default function RootIcon(props: RootIconProps & StyledIconProps) {
  const { children, ...styledProps } = props;
  return (
    <Root {...styledProps}>
      <SVGUniqueID>
        {props.children}
      </SVGUniqueID>
    </Root>
  )
}
