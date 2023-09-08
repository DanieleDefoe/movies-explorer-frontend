import { FC } from 'react';

import './Form.css';
import { FormProps } from './lib/types';

export const Form: FC<FormProps> = ({ children, className, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={`form ${className ?? ''}`}>
      {children}
    </form>
  );
};
