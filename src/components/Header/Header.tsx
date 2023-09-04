import { CSSProperties, FC } from 'react';

import './Header.css';

import { images } from '../../images';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { paths } from '../../utils';
import { HeaderProps } from './lib/types';

export const Header: FC<HeaderProps> = ({ handleMenuClick }) => {
  const location = useLocation();
  const styles: CSSProperties = {
    background:
      location.pathname === '/' ? 'var(--tertiary-bg-color, #073042)' : 'none',
  };

  return (
    <header className="header" style={styles}>
      <Link to={paths.root} className="header__logo">
        <img src={images.logo} alt="логотип" />
      </Link>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header_nav-item">
            <NavLink to={paths.signup} className="header__link">
              Регистрация
            </NavLink>
          </li>
          <li className="header_nav-item">
            <NavLink to={paths.signin} className="header__signin">
              Войти
            </NavLink>
          </li>
          <li className="header_nav-item header__movies">
            <NavLink to={paths.movies} className="header__link">
              Фильмы
            </NavLink>
          </li>
          <li className="header_nav-item header__saved">
            <NavLink to={paths.saved} className="header__link">
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <button
          className="header__burger"
          onClick={handleMenuClick}
          aria-label="бургер меню"
        />
        <NavLink to={paths.profile} className="header__account">
          <p>Аккаунт</p>
          <div className="header__account-icon">
            <img src={images.account} alt="аккаунт" />
          </div>
        </NavLink>
      </nav>
    </header>
  );
};
