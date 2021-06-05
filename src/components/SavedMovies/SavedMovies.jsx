import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import './SavedMovies.css';

function SavedMovies({ place }) {
  return (
    <div className='savedMovies'>
      <SearchForm />
      <MoviesCardList
        place={place}
      />
    </div>
  )
}

export default SavedMovies;
