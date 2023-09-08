import { MouseEvent } from 'react';

export interface SubmitProps {
  text: string;
  isValid?: boolean;
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
}
