import { CSSProperties, FC, useContext } from 'react';

import './Header.css';

import { images } from '../../images';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { paths } from '../../utils';
import { MenuContext } from '../../contexts';

export const Header: FC = () => {
  const location = useLocation();
  const { handleMenuClick } = useContext(MenuContext);
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
        <ul className="header-list">
          {location.pathname === '/' ? (
            <>
              <li>
                <NavLink to={paths.signup} className="header-list__item">
                  Регистрация
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={paths.signin}
                  className="header-list__signin header__signin"
                >
                  Войти
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="header__movies">
                <NavLink to={paths.movies} className="header-list__item">
                  Фильмы
                </NavLink>
              </li>
              <li className="header__saved">
                <NavLink to={paths.saved} className="header-list__item">
                  Сохранённые фильмы
                </NavLink>
              </li>
            </>
          )}
        </ul>
        {location.pathname !== '/' && (
          <>
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
          </>
        )}
      </nav>
    </header>
  );
};
