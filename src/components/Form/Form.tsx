import { FC } from 'react';

import './Form.css';
import { FormProps } from './lib/types';

export const Form: FC<FormProps> = ({ children }) => {
  return <form className="form">{children}</form>;
};
