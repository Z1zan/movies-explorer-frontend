import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ place }) {
  return(
    <ul className='movies-list'>
      <li>
        <MoviesCard
          place={place}
        />
      </li>
      <li>
        <MoviesCard
          place={place}
        />
      </li>
      <li>
        <MoviesCard
          place={place}
        />
      </li>
      <li>
        <MoviesCard
          place={place}
        />
      </li>

    </ul>
  )
}
export default MoviesCardList;
