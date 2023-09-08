import { FC } from 'react';
import './ErrorMessage.css';
import { ErrorMessageProps } from './lib/types';

export const ErrorMessage: FC<ErrorMessageProps> = ({ message, className }) => {
  return <span className={`error-message ${className ?? ''}`}>{message}</span>;
};
