import { FC } from 'react';

import { ProgressProps } from './lib/types';

import './Progress.css';

export const Progress: FC<ProgressProps> = ({
  percentage,
  color,
  title,
  bg,
  className,
}) => {
  return (
    <div className={`progress ${className ? className : ''}`}>
      <p className="progress_percentage" style={{ color, background: bg }}>
        {percentage}
      </p>
      <p className="progress__title">{title}</p>
    </div>
  );
};
