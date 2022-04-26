import Icon from '../Icon';
import { Root, Link } from './styled';
import { socialLinks } from 'data/socialLinks';

export default function SocialLinks() {
  if (!socialLinks) return null;

  return (
    <Root>
      {socialLinks.map((link) => (
        <Link href={link.url} target="_blank" key={link.iconName}>
          <Icon name={link.iconName} />
        </Link>
      ))}
    </Root>
  )
}
