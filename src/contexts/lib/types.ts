import { ReactNode } from 'react';

export interface MenuContextProps {
  isMenuOpen: boolean;
  handleMenuClick?(): void;
  handleExitClick?(): void;
}

export interface MenuContextProviderProps {
  children: ReactNode;
}
