import { FormEvent, ReactNode } from 'react';

export interface FormProps {
  children: ReactNode;
  className?: string;
  onSubmit?(event: FormEvent<HTMLFormElement>): void;
}
