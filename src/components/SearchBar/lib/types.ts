import { ChangeEvent } from 'react';

export interface SearchBarProps {
  value: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  isLoading: boolean | null;
}
