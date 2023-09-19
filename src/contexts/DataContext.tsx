/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { DataContextValues } from './lib/types';

export const DataContext = createContext<DataContextValues | null>(null);
