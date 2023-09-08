import { ErrorValues, Values } from '../../../hooks/lib/types';

interface Validation {
  values: Values;
  errors: ErrorValues;
  isValid: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resetForm: (
    newValues?: object,
    newErrors?: object,
    newIsValid?: boolean,
  ) => void;
}

export interface ProfileFormProps {
  isEditing: boolean;
  validation: Validation;
}
