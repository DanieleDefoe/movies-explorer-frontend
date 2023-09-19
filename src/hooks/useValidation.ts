/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, useCallback, ChangeEvent } from 'react';
import { ErrorValues, Values } from './lib/types';

export function useValidation() {
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<ErrorValues>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    const { name, value, validationMessage } = target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: validationMessage }));
    setIsValid(target.closest('form')!.checkValidity());
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [],
  );

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
    setErrors,
    setIsValid,
  };
}
