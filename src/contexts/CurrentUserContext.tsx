import { User } from '../utils';
import { createContext } from 'react';

export const CurrentUserContext = createContext<User | null>(null);
