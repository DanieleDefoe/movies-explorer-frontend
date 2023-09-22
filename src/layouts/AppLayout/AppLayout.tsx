import { CSSProperties } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { Header, Main, Footer } from '../../components';

import './AppLayout.css';

export const AppLayout = () => {
  const location = useLocation();
  const styles: CSSProperties = {
    background:
      location.pathname === '/' ? 'var(--tertiary-bg-color, #073042)' : 'none',
  };

  return (
    <>
      <div className="layout" style={styles}>
        <Header />
        <Main>
          <Outlet />
        </Main>
        {location.pathname !== '/profile' && <Footer />}
      </div>
    </>
  );
};
