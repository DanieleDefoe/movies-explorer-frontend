import { FC } from 'react';

import { ProgressProps } from './lib/types';

import './Progress.css';

export const Progress: FC<ProgressProps> = ({
  percentage,
  color,
  title,
  bg,
  maxWidth,
  className,
}) => {
  return (
    <div className={`progress ${className}`} style={{ maxWidth }}>
      <p className="progress_percentage" style={{ color, background: bg }}>
        {percentage}
      </p>
      <p className="progress__title">{title}</p>
    </div>
  );
};
