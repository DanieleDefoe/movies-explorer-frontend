import { CSSProperties, useState } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { Header, Main, Footer, Menu } from '../../components';

import './AppLayout.css';

export const AppLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const styles: CSSProperties = {
    background:
      location.pathname === '/' ? 'var(--tertiary-bg-color, #073042)' : 'none',
  };

  function handleMenuClick() {
    setIsMenuOpen(true);
  }

  function handleExitClick() {
    setIsMenuOpen(false);
  }

  return (
    <section className="layout" style={styles}>
      <Header handleMenuClick={handleMenuClick} />
      <Menu isMenuOpen={isMenuOpen} handleExitClick={handleExitClick} />
      <Main>
        <Outlet />
      </Main>
      {location.pathname !== '/profile' && <Footer />}
    </section>
  );
};
