import { FC } from 'react';

import './Submit.css';
import { SubmitProps } from './lib/types';

export const Submit: FC<SubmitProps> = ({ text }) => {
  return (
    <button type="submit" className="submit">
      {text}
    </button>
  );
};
