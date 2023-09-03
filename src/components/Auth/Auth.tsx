import { FC } from 'react';

import { images } from '../../images';
import './Auth.css';
import { AuthProps } from './lib/types';
import { Link } from 'react-router-dom';
import { paths } from '../../utils';

export const Auth: FC<AuthProps> = ({ children, title }) => {
  return (
    <section className="auth">
      <Link className="auth__icon" to={paths.root}>
        <img src={images.logo} alt="логотип" />
      </Link>
      <h2 className="auth__message">{title}</h2>
      {children}
    </section>
  );
};
