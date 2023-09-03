import { FC } from 'react';

import { images } from '../../images';
import './Auth.css';
import { AuthProps } from './lib/types';

export const Auth: FC<AuthProps> = ({ children, title }) => {
  return (
    <section className="auth">
      <img className="auth__icon" src={images.logo} alt="логотип" />
      <h2 className="auth__message">{title}</h2>
      {children}
    </section>
  );
};
