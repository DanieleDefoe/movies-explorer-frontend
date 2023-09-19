import { Dispatch, SetStateAction } from 'react';

export interface MovieFormProps {
  search?(query: string): Promise<any>;
  checked?: boolean;
  setChecked?: Dispatch<SetStateAction<boolean>>;
  query?: string;
  isLoading: boolean | null;
}
