/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, MouseEvent, useContext, useEffect, useRef } from 'react';

import { NavLink } from 'react-router-dom';
import './Menu.css';
import { paths } from '../../utils';
import { images } from '../../images';
import { MenuContext } from '../../contexts';

export const Menu: FC = () => {
  const { isMenuOpen, handleExitClick } = useContext(MenuContext);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    menuRef.current?.focus();
  }, []);

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      handleExitClick!();
    }
  }

  return (
    <div
      className={`menu-wrapper ${isMenuOpen ? 'menu-wrapper_active' : ''}`}
      onClick={handleOverlayClick}
    >
      <section
        className={`menu ${isMenuOpen ? 'menu_active' : ''}`}
        ref={menuRef}
      >
        <button
          className="menu__exit"
          onClick={handleExitClick}
          aria-label="выйти из меню"
        />
        <nav className="menu__nav">
          <ul className="menu__nav-list">
            <li>
              <NavLink
                onClick={handleExitClick}
                className={({ isActive }) =>
                  `menu__link ${isActive ? 'menu__link_active' : ''}`
                }
                to={paths.root}
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleExitClick}
                className={({ isActive }) =>
                  `menu__link ${isActive ? 'menu__link_active' : ''}`
                }
                to={paths.movies}
              >
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleExitClick}
                className={({ isActive }) =>
                  `menu__link ${isActive ? 'menu__link_active' : ''}`
                }
                to={paths.saved}
              >
                Сохраненные фильмы
              </NavLink>
            </li>
          </ul>
          <NavLink
            onClick={handleExitClick}
            className={({ isActive }) =>
              `menu__link menu__link_type_profile ${
                isActive ? 'menu__link_active' : ''
              }`
            }
            to={paths.profile}
          >
            Аккаунт
            <div className="menu__profile-icon">
              <img src={images.account} alt="аккунт" />
            </div>
          </NavLink>
        </nav>
      </section>
    </div>
  );
};
