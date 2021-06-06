import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  console.log(props.movies)
  return (
    <div className='movies-list'>

      {props.movies.map((movie) => {
        return (
            <MoviesCard
              movie={movie}
              key={movie.id}
              {...movie}
              place={props.place}
            />
        )
      })}
    </div>
  )
}

export default MoviesCardList;
