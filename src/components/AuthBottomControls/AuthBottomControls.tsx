import { FC } from 'react';

import './AuthBottomControls.css';

import { Submit } from '..';
import { AuthBottomProps } from './lib/types';
import { Link } from 'react-router-dom';

export const AuthBottomControls: FC<AuthBottomProps> = ({
  submitText,
  question,
  to,
  linkText,
}) => {
  return (
    <div className="controls">
      <Submit text={submitText} />
      <p className="controls__question">
        {question}{' '}
        <Link to={to} className="controls__link">
          {linkText}
        </Link>
      </p>
    </div>
  );
};
