import { FC } from 'react';

import './Fieldset.css';
import { FieldsetProps } from './lib/types';

export const Fieldset: FC<FieldsetProps> = ({ children }) => {
  return <fieldset className="fieldset">{children}</fieldset>;
};
