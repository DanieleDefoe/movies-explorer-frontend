import { FC } from 'react';

import { CurrentUserContext } from './CurrentUserContext';
import { ContextProviderProps } from './lib/types';
import { DataContext } from './DataContext';
import { MenuContext } from './MenuContext';

export const ContextsContainer: FC<ContextProviderProps> = ({
  children,
  signin,
  signup,
  signout,
  isLoggedIn,
  user,
  isMenuOpen,
  handleExitClick,
  handleMenuClick,
  isSearchLoading,
  updateUserData,
  savedMovies,
  fetchSavedMovies,
  setPopupMessage,
  setPopupOpen,
  setPopupType,
}) => {
  return (
    <CurrentUserContext.Provider value={user}>
      <DataContext.Provider
        value={{
          signin,
          signup,
          signout,
          isLoggedIn,
          isSearchLoading,
          updateUserData,
          savedMovies,
          fetchSavedMovies,
          setPopupMessage,
          setPopupOpen,
          setPopupType,
        }}
      >
        <MenuContext.Provider
          value={{ isMenuOpen, handleExitClick, handleMenuClick }}
        >
          {children}
        </MenuContext.Provider>
      </DataContext.Provider>
    </CurrentUserContext.Provider>
  );
};
