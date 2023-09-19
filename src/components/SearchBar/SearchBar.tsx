import { FC } from 'react';

import './SearchBar.css';
import { SearchBarProps } from './lib/types';

export const SearchBar: FC<SearchBarProps> = ({
  value,
  onChange,
  isLoading,
}) => {
  return (
    <label className="search" htmlFor="search-bar">
      <input
        type="text"
        className="search__input"
        id="search-bar"
        name="movie"
        placeholder="Фильм"
        required
        value={value || ''}
        onChange={onChange}
      />
      <button
        type="submit"
        className="search__submit"
        disabled={Boolean(isLoading)}
      >
        Поиск
      </button>
    </label>
  );
};
