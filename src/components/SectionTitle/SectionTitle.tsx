import { FC } from 'react';

import './SectionTitle.css';
import { SectionTitleProps } from './lib/types';

export const SectionTitle: FC<SectionTitleProps> = ({ text, className }) => {
  return (
    <div className="title-container">
      <h2 className="title-container__title">{text}</h2>
      <hr className={`title-container__divider ${className ?? ''}`} />
    </div>
  );
};
