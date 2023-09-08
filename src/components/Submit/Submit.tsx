import { FC } from 'react';

import './Submit.css';
import { SubmitProps } from './lib/types';

export const Submit: FC<SubmitProps> = ({ text, isValid }) => {
  return (
    <button type="submit" className="submit" disabled={!isValid}>
      {text}
    </button>
  );
};
