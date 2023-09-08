import './SearchBar.css';

export const SearchBar = () => {
  return (
    <label className="search" htmlFor="search-bar">
      <input
        type="text"
        className="search__input"
        id="search-bar"
        placeholder="Фильм"
        required
        minLength={1}
      />
      <button type="submit" className="search__submit">
        Поиск
      </button>
    </label>
  );
};
