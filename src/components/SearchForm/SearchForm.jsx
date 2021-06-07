import './SearchForm.css';
import {useState} from "react";

function SearchForm(props) {

  const [searchResult, setSearchResult] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  function handleSearch(e) {
    setSearchValue(e.target.value);
  }

  function handleCheckbox() {
    setSearchResult(!searchResult);
  }

  function handleFilter(movies, search) {
    return movies.nameRU.toLowerCase().includes(search.toLowerCase());
  }

  function filterMovies(movies, value) {
    if (searchResult) {
      return movies.filter((movie) => movie.duration <= 40 && handleFilter(movie, value));
    } else {
      return movies.filter((movie) => handleFilter(movie, value));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (props.place === 'movies') {
      const moviesArr = filterMovies(props.movies, searchValue);
      props.handleSearchMovies(moviesArr);
    } else if (props.place === 'saved-movies') {
      const moviesArr = filterMovies(props.savedMovies, searchValue);
      props.handleSearchMovies(moviesArr);
    }
    return;
  }

  return(
    <div className='searchForm'>
      <form onSubmit={handleSubmit} className='searchForm__container'>
        <input onChange={handleSearch}
               className='searchForm__input' placeholder='Фильм' />
        <div className='searchForm__buttons'>
          <button className='searchForm__search-btn' type='submit' />
          <div className='searchForm__checkBox-container'>
            <label className='searchForm__checkBox'>
              <input onChange={handleCheckbox} className='checkBox__input' type='checkbox' />
              <p className='checkBox__description'>Короткометражки</p>
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}
export default SearchForm;
