import { FC, Suspense } from 'react';

import './Main.css';
import { MainProps } from './lib/types';
import { Preloader } from '..';

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="main">
      <Suspense fallback={<Preloader />}>{children}</Suspense>
    </main>
  );
};
