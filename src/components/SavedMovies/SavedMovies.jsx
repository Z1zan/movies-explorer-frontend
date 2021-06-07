import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import './SavedMovies.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <div className='savedMovies'>
        <SearchForm
          movies={props.localStorageMovies}
          savedMovies={props.savedMovies}
          handleSearchMovies={props.handleSearchMovies}
          place={props.place}
        />
        <MoviesCardList
          place={props.place}
          movies={props.movies}
          savedMovies={props.savedMovies}
          deleteSavedMovie={props.deleteSavedMovie}
          movieSearchList={props.movieSearchList}
        />
      </div>
      <Footer />
    </>
  )
}

export default SavedMovies;
