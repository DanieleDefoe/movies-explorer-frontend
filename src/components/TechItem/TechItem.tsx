import { FC } from 'react';

import './TechItem.css';
import { TechItemsProps } from './lib/types';

export const TechItem: FC<TechItemsProps> = ({ text }) => {
  return <article className="tech">{text}</article>;
};
