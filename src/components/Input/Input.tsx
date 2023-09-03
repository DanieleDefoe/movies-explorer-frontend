import { FC } from 'react';

import './Input.css';
import { InputProps } from './lib/types';

export const Input: FC<InputProps> = ({ type, id, value }) => {
  return <input type={type} id={id} value={value} className="input" />;
};
