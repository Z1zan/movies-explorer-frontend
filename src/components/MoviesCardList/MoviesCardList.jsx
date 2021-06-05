import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  console.log(props.movies)
  return (
    <ul className='movies-list'>

      {props.movies.map((movie) => {
        return (
          <li>
            <MoviesCard
              movie={movie}
              key={movie.id}
              {...movie}
              place={props.place}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default MoviesCardList;
