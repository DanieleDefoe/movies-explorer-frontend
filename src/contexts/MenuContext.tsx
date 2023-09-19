import { createContext } from 'react';
import { MenuContextProps } from './lib/types';

export const MenuContext = createContext<MenuContextProps>({
  isMenuOpen: false,
});
