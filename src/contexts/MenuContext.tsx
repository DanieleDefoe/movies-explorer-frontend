import { FC, createContext, useState } from 'react';
import { MenuContextProps, MenuContextProviderProps } from './lib/types';
import { Menu } from '../components';

export const MenuContext = createContext<MenuContextProps>({
  isMenuOpen: false,
});

export const MenuContextProvider: FC<MenuContextProviderProps> = ({
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function handleMenuClick() {
    setIsMenuOpen(true);
  }

  function handleExitClick() {
    setIsMenuOpen(false);
  }
  return (
    <MenuContext.Provider
      value={{ isMenuOpen, handleMenuClick, handleExitClick }}
    >
      <Menu />
      {children}
    </MenuContext.Provider>
  );
};
