import { FC } from 'react';
import './Checkbox.css';
import { CheckboxProps } from './lib/types';

export const Checkbox: FC<CheckboxProps> = ({ checked, handleChange }) => {
  return (
    <label
      htmlFor="shorts"
      className={`shorts ${checked ? 'shorts_active' : ''}`}
    >
      <div
        className={`shorts__circle ${checked ? 'shorts__circle_active' : ''}`}
      />
      <input
        type="checkbox"
        id="shorts"
        className="shorts__switch"
        onChange={handleChange}
        hidden
      />
      <p className="shorts__title">Короткометражки</p>
    </label>
  );
};
