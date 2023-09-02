import { CSSProperties } from 'react';

import './Header.css';

import { images } from '../../images';
import { NavLink, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const styles: CSSProperties = {
    background:
      location.pathname === '/' ? 'var(--tertiary-bg-color, #073042)' : 'none',
  };

  return (
    <header className="header" style={styles}>
      <img src={images.logo} alt="логотип" className="header__logo" />
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header_nav-item">
            <NavLink to="/signup" className="header__signup">
              Регистрация
            </NavLink>
          </li>
          <li className="header_nav-item">
            <NavLink to="/signin" className="header__signin">
              Войти
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
