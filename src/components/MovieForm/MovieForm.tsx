import { useState, ChangeEvent, useCallback } from 'react';

import { Checkbox, SearchBar } from '..';
import './MovieForm.css';

export const MovieForm = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = useCallback(function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setChecked(event.target.checked);
  }, []);

  return (
    <form className="movie-form">
      <SearchBar />
      <Checkbox checked={checked} handleChange={handleChange} />
    </form>
  );
};
