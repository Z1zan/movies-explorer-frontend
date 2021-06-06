import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <div className='movies-list'>

      { props.place === 'movies'
          ? props.movies.map((movie) => {
            return (
                <MoviesCard
                  movie={movie}
                  key={movie.id}
                  {...movie}
                  place={props.place}
                  handleSaveMovie={props.handleSaveMovie}
                  savedMovies={props.savedMovies}
                  deleteSavedMovie={props.deleteSavedMovie}
                />
            )
          })
        : props.savedMovies.map((savedMovie) => {
          return (
            <MoviesCard
              movie={savedMovie}
              key={savedMovie.movieId}
              {...savedMovie}
              place={props.place}
              savedMovies={props.savedMovies}
              deleteSavedMovie={props.deleteSavedMovie}
              />
          )
        })
      }
    </div>
  )
}

export default MoviesCardList;
