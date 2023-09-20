import { BackendMovie, User } from '../../utils';
import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface MenuContextProps {
  isMenuOpen: boolean;
  handleMenuClick?(): void;
  handleExitClick?(): void;
}

export interface DataContextValues {
  signin(email: string, password: string): any;
  signup(name: string, email: string, password: string): any;
  signout(): any;
  isLoggedIn: boolean;
  isSearchLoading: boolean;
  updateUserData(name: string, email: string): any;
  savedMovies: Array<BackendMovie>;
  setSavedMovies: Dispatch<SetStateAction<Array<BackendMovie>>>;
  fetchSavedMovies(): any;
  setPopupType: Dispatch<SetStateAction<'error' | 'success' | undefined>>;
  setPopupOpen: Dispatch<SetStateAction<boolean>>;
  setPopupMessage: Dispatch<SetStateAction<string>>;
}

export interface ContextProviderProps extends DataContextValues {
  user: User | null;
  children: ReactNode;
  isMenuOpen: boolean;
  handleExitClick(): void;
  handleMenuClick(): void;
}
