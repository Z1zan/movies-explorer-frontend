import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from './Preloader/Preloader';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies(props) {

  return(
    <>
      <Header place={props.place} />
      <div className='movies'>
        <SearchForm />
        <Preloader />
        <MoviesCardList
          place={props.place}
        />

        <div className='movies__btn-container'>
          <button className='movies__more-btn' type='button'>Ещё</button>
        </div>

      </div>
      <Footer />
    </>
  )
}
export default Movies;
