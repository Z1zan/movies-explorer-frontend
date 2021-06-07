import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {useEffect, useState} from "react";

function Movies(props) {

  let start;
  let more;

  const [moviesCards, setMoviesCards] = useState()
  const [moviesCardsMore, setMoviesCardsMore] = useState()


  useEffect(() => {
    if (window.innerWidth <= 480) {
      start = 5;
      more = 2;
    } else if (window.innerWidth <= 768) {
      start = 8;
      more = 2;
    } else {
      start = 12;
      more = 3;
    }

    setMoviesCards(start);
    setMoviesCardsMore(more);
  }, [])

  function handleMovies() {
    setMoviesCards(moviesCards + moviesCardsMore);
    console.log('ee', moviesCards);
  }
  console.log('123', props.localStorageMovies === null);
  return (
    <>
      <Header loggedIn={props.loggedIn}/>
      <div className='movies'>
        <SearchForm
          movies={props.localStorageMovies}
          savedMovies={props.savedMovies}
          handleSearchMovies={props.handleSearchMovies}
          place={props.place}
        />
        {
          props.preloader
            ? (<Preloader/>)
            : ''
        }
        <MoviesCardList
          place={props.place}
          // movies={props.localStorageMovies}
          movies={
            props.localStorageMovies === null
            ? null
            : props.localStorageMovies.length !== 0
              ? props.localStorageMovies.slice(0, moviesCards)
              : ''
          }
          savedMovies={props.savedMovies}
          handleSaveMovie={props.handleSaveMovie}
          deleteSavedMovie={props.deleteSavedMovie}
          preloader={props.preloader}
          movieSearchList={props.movieSearchList}
        />

        <div className={`movies__btn-container ${
          props.localStorageMovies === null
          ? ''
          : moviesCards >= props.localStorageMovies.length ? '_disabled' : ''}
        `}>
          <button onClick={handleMovies} className='movies__more-btn' type='button'>Ещё</button>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Movies;
