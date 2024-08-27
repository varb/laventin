import { useMatch, useNavigate } from "react-router-dom";
import { CaretLeft } from "@phosphor-icons/react";
import {
  HeaderRoot,
  HeaderWrapper,
  Logo,
  HeaderRigthAction,
} from "./Header.styles";
import { Button } from "shared/ui";

export default function Header() {
  const isHomePage = useMatch("/");
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <HeaderRoot>
      <HeaderWrapper $isHome={!!isHomePage}>
        {isHomePage ? (
          <>
            <Logo />
            <span />
          </>
        ) : (
          <>
            <Button
              size="small"
              onClick={onBackButtonClick}
              variant="ghost"
              iconLeft={<CaretLeft />}
            >
              Back
            </Button>
            <HeaderRigthAction>
              <span />
            </HeaderRigthAction>
          </>
        )}
      </HeaderWrapper>
    </HeaderRoot>
  );
}
