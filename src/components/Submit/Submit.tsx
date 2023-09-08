import { FC } from 'react';

import './Submit.css';
import { SubmitProps } from './lib/types';

export const Submit: FC<SubmitProps> = ({ text, isValid, onClick }) => {
  return (
    <button
      type="submit"
      className="submit"
      disabled={!isValid}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
