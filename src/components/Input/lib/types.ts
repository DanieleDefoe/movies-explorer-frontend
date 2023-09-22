import { ChangeEvent } from 'react';

export interface InputProps {
  type: 'text' | 'email' | 'password';
  id: string;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}
