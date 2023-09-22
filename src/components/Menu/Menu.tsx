/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, MouseEvent, useEffect, useRef } from 'react';

import { NavLink } from 'react-router-dom';
import './Menu.css';
import { paths } from '../../utils';
import { images } from '../../images';
import { MenuProps } from './lib/types';

export const Menu: FC<MenuProps> = ({ exit, isOpen }) => {
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    menuRef.current?.focus();
  }, []);

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      exit();
    }
  }

  return (
    <div
      className={`menu-wrapper ${isOpen ? 'menu-wrapper_active' : ''}`}
      onClick={handleOverlayClick}
    >
      <section className={`menu ${isOpen ? 'menu_active' : ''}`} ref={menuRef}>
        <button
          className="menu__exit"
          onClick={exit}
          aria-label="выйти из меню"
        />
        <nav className="menu__nav">
          <ul className="menu__nav-list">
            <li>
              <NavLink
                onClick={exit}
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
                onClick={exit}
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
                onClick={exit}
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
            onClick={exit}
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
