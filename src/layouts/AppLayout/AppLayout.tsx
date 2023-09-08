import { CSSProperties } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { Header, Main, Footer } from '../../components';

import './AppLayout.css';
import { MenuContextProvider } from '../../contexts';

export const AppLayout = () => {
  const location = useLocation();
  const styles: CSSProperties = {
    background:
      location.pathname === '/' ? 'var(--tertiary-bg-color, #073042)' : 'none',
  };

  return (
    <MenuContextProvider>
      <div className="layout" style={styles}>
        <Header />
        <Main>
          <Outlet />
        </Main>
        {location.pathname !== '/profile' && <Footer />}
      </div>
    </MenuContextProvider>
  );
};
