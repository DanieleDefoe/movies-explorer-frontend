import { FC } from 'react';

import { NavLink } from 'react-router-dom';
import './Menu.css';
import { paths } from '../../utils';
import { images } from '../../images';
import { MenuProps } from './lib/types';

export const Menu: FC<MenuProps> = ({ isMenuOpen, handleExitClick }) => {
  return (
    <div className={`menu-wrapper ${isMenuOpen ? 'menu-wrapper_active' : ''}`}>
      <section className={`menu ${isMenuOpen ? 'menu_active' : ''}`}>
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
