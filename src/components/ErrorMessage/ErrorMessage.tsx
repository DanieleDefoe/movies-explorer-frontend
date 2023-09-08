import { FC } from 'react';
import './ErrorMessage.css';
import { ErrorMessageProps } from './lib/types';

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <span className="error-message">{message}</span>;
};
