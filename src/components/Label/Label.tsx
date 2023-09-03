import { FC } from 'react';

import './Label.css';
import { LabelProps } from './lib/types';

export const Label: FC<LabelProps> = ({ htmlFor, text }) => {
  return (
    <label className="label" htmlFor={htmlFor}>
      {text}
    </label>
  );
};
