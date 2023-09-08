import { FC } from 'react';

import './Input.css';
import { InputProps } from './lib/types';

export const Input: FC<InputProps> = ({
  type,
  id,
  value,
  onChange,
  name,
  minLength,
  maxLength,
}) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      className="input"
      onChange={onChange}
      name={name}
      minLength={minLength}
      maxLength={maxLength}
      required
    />
  );
};
