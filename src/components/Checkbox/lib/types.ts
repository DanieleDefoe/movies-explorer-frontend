import { ChangeEvent } from 'react';

export interface CheckboxProps {
  checked: boolean;
  handleChange(event: ChangeEvent<HTMLInputElement>): void;
}
