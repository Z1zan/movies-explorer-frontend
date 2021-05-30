import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from './Preloader/Preloader';

function Movies() {
  return(
    <div className='movies'>
      <SearchForm />
      <MoviesCardList
        place='movies'
      />
      <Preloader />
    </div>
  )
}
export default Movies;
