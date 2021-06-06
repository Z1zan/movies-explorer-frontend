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
        <SearchForm />
        <MoviesCardList
          place={props.place}
          movies={props.movies}
          savedMovies={props.savedMovies}
          deleteSavedMovie={props.deleteSavedMovie}
        />
      </div>
      <Footer />
    </>
  )
}

export default SavedMovies;
