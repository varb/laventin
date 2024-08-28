import { FC, createContext, useContext, ReactNode, useState } from "react";

interface HeaderContextProps {
  rightAction: ReactNode;
  setRightAction: (action: ReactNode) => void;
}

const HeaderContext = createContext<HeaderContextProps>({
  rightAction: null,
  setRightAction: () => {},
});

export const useHeaderContext = () => useContext(HeaderContext);

export const HeaderProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [rightAction, setRightAction] = useState<ReactNode>(null);

  return (
    <HeaderContext.Provider value={{ rightAction, setRightAction }}>
      {children}
    </HeaderContext.Provider>
  );
};
