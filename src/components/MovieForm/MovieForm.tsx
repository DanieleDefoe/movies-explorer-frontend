/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ChangeEvent, useCallback, useEffect, FormEvent, FC } from 'react';

import { Checkbox, ErrorMessage, SearchBar } from '..';
import './MovieForm.css';
import { useValidation } from '../../hooks';
import { MovieFormProps } from './lib/types';

export const MovieForm: FC<MovieFormProps> = ({
  search,
  checked,
  setChecked,
  query,
  isLoading,
}) => {
  const {
    values,
    errors,
    resetForm,
    handleChange: onChange,
    setErrors,
  } = useValidation();

  useEffect(() => {
    resetForm(
      { movie: query ? localStorage.getItem(query) : '' },
      { movie: '' },
    );
  }, []);

  useEffect(() => {
    if (values.movie && query) {
      localStorage.setItem(query, values.movie);
    }
  }, [values.movie, query]);

  const handleChange = useCallback(function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setChecked!(event.target.checked);
  }, []);

  function handleMovieSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (values.movie === '') {
      setErrors({ movie: 'Нужно ввести ключевое слово' });
    } else {
      search!(values.movie);
    }
  }

  return (
    <form className="movie-form" onSubmit={handleMovieSearch} noValidate>
      <SearchBar
        value={values.movie}
        onChange={onChange}
        isLoading={isLoading}
      />
      {Boolean(errors.movie) && <ErrorMessage message={errors.movie} />}
      <Checkbox checked={checked!} handleChange={handleChange} />
    </form>
  );
};
