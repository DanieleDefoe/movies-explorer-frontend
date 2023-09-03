export interface InputProps {
  type: 'text' | 'email' | 'password';
  id: string;
  placeholder?: string;
  value?: string;
}
