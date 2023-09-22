import { FC } from 'react';

import { CurrentUserContext } from './CurrentUserContext';
import { ContextProviderProps } from './lib/types';
import { DataContext } from './DataContext';

export const ContextsContainer: FC<ContextProviderProps> = ({
  children,
  signin,
  signup,
  signout,
  isLoggedIn,
  user,
  isSearchLoading,
  updateUserData,
  savedMovies,
  fetchSavedMovies,
  setPopupMessage,
  setPopupOpen,
  setPopupType,
  setSavedMovies,
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
          setSavedMovies,
        }}
      >
        {children}
      </DataContext.Provider>
    </CurrentUserContext.Provider>
  );
};
