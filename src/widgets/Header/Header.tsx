import { useMatch, useNavigate } from "react-router-dom";
import { CaretLeft } from "@phosphor-icons/react";
import {
  HeaderRoot,
  HeaderWrapper,
  Logo,
  HeaderRigthAction,
} from "./Header.styles";
import { Button } from "shared/ui";
import { useHeaderContext } from "shared/providers/HeaderProvider";

export default function Header() {
  const isHomePage = !!useMatch("/");
  const navigate = useNavigate();
  const { rightAction } = useHeaderContext();

  const onBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <HeaderRoot>
      <HeaderWrapper $isHome={isHomePage} key="headerWrapper">
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
            {rightAction && (
              <HeaderRigthAction>{rightAction}</HeaderRigthAction>
            )}
          </>
        )}
      </HeaderWrapper>
    </HeaderRoot>
  );
}
