import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return(
    <ul className='movies-list'>
      <li>
        <MoviesCard />
      </li>
      <li>
        <MoviesCard />
      </li>
      <li>
        <MoviesCard />
      </li>
      <li>
        <MoviesCard />
      </li>

    </ul>
  )
}
export default MoviesCardList;
