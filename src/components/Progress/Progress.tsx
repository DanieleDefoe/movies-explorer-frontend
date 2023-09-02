import { FC } from 'react';

import { ProgressProps } from './lib/types';

import './Progress.css';

export const Progress: FC<ProgressProps> = ({
  percentage,
  color,
  title,
  bg,
  maxWidth,
}) => {
  return (
    <div className="progress" style={{ maxWidth }}>
      <p className="progress_percentage" style={{ color, background: bg }}>
        {percentage}
      </p>
      <p className="progress__title">{title}</p>
    </div>
  );
};
