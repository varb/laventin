import { useMatch, useNavigate } from "react-router-dom";
import { CaretLeft } from "@phosphor-icons/react";
import { Root, Logo, TopBarLink } from "./Header.styles";

export default function Header() {
  const isHomePage = useMatch("/");
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <Root>
      {isHomePage ? (
        <Logo />
      ) : (
        <TopBarLink onClick={onBackButtonClick}>
          <CaretLeft size={16} />
          Back
        </TopBarLink>
      )}
    </Root>
  );
}
