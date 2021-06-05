import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from './Preloader/Preloader';

function Movies() {
  return(
    <div className='movies'>
      <SearchForm />
      <Preloader />
      <MoviesCardList
        place='movies'
      />

      <div className='movies__btn-container'>
        <button className='movies__more-btn' type='button'>Ещё</button>
      </div>

    </div>
  )
}
export default Movies;
