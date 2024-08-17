import { Root } from "./SocialLinks.styles";
import { socialLinks } from "../model/socialLinksList";
import { IconButton } from "shared/ui";

export default function SocialLinks() {
  if (!socialLinks) return null;

  return (
    <Root>
      {socialLinks.map(({ icon, id, url }) => (
        <IconButton
          key={id}
          icon={icon}
          forwardedAs="a"
          href={url}
          target="_blank"
        />
      ))}
    </Root>
  );
}
