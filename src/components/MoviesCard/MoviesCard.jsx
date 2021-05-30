import { useState } from "react";

import './MoviesCard.css';

function MoviesCard({ place }) {

  const [isFavorite, setIsFavorite] = useState(false);

  function setFavoriteMovie() {
    setIsFavorite(!isFavorite)
  }

  return(
    <div className='movieCard'>
      <div className='movieCard__container'>
        <h3 className='movieCard__title'>33 слова о дизайне</h3>
        <span className='movieCard__time'>1ч 47м</span>
        {
          place === 'movies' &&
          <button type='checkbox' onClick={setFavoriteMovie}
            className={`movieCard__icon movieCard__favorite ${ isFavorite ? 'movieCard__favorite_active' : '' } `} />
        }
        {
          place === 'saved-movies' &&
          <button type='checkbox' onClick={setFavoriteMovie}
            className={`movieCard__icon  movieCard__deleteIcon`} />
        }

      </div>
      <img
        className='movieCard__img'
        src='https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
        alt='фильм'
      />
    </div>
  )
}
export default MoviesCard;
