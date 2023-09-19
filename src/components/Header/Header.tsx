/* eslint-disable prefer-const */
import { CSSProperties, FC, useContext, useEffect, useState } from 'react';

import './Header.css';

import { images } from '../../images';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { paths } from '../../utils';
import { MenuContext, DataContext, DataContextValues } from '../../contexts';

export const Header: FC = () => {
  const { isLoggedIn } = useContext(DataContext) as DataContextValues;
  const [userLinksShown, setUserLinksShown] = useState<boolean | null>(null);
  const location = useLocation();
  const { handleMenuClick } = useContext(MenuContext);
  const styles: CSSProperties = {
    background:
      location.pathname === '/' ? 'var(--tertiary-bg-color, #073042)' : 'none',
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isLoggedIn) {
      setUserLinksShown(true);
    } else {
      timeoutId = setTimeout(() => {
        setUserLinksShown(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLoggedIn]);

  return (
    <header className="header" style={styles}>
      <Link to={paths.root} className="header__logo">
        <img src={images.logo} alt="логотип" />
      </Link>
      <nav className="header__nav">
        <ul className="header-list">
          {userLinksShown === false && (
            <>
              <li>
                <NavLink
                  to={paths.signup}
                  className={({ isActive }) =>
                    `header-list__item ${
                      isActive ? 'header-list__item_active' : ''
                    }`
                  }
                >
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
          )}
          {userLinksShown && (
            <>
              <li className="header__movies">
                <NavLink
                  to={paths.movies}
                  className={({ isActive }) =>
                    `header-list__item ${
                      isActive ? 'header-list__item_active' : ''
                    }`
                  }
                >
                  Фильмы
                </NavLink>
              </li>
              <li className="header__saved">
                <NavLink
                  to={paths.saved}
                  className={({ isActive }) =>
                    `header-list__item ${
                      isActive ? 'header-list__item_active' : ''
                    }`
                  }
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </>
          )}
        </ul>
        {userLinksShown && (
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
