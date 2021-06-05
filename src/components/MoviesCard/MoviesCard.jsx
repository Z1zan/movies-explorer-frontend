import {useState} from 'react';
import {Link} from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard(props) {

  function timeConvert(time) {
    if (time <= 60) {
      return time + 'м';
    } else {
      return Math.floor(time / 60) + 'ч ' + (time % 60) + 'м';
    }
  }

  const emptyImg = 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80';

  const [isFavorite, setIsFavorite] = useState(false);

  function setFavoriteMovie() {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className='movieCard'>
      <div className='movieCard__container'>
        <h3 className='movieCard__title'>{props.nameRU}</h3>
        <span className='movieCard__time'>{timeConvert(props.duration)}</span>
        {
          props.place === 'movies' &&
          <button type='checkbox' onClick={setFavoriteMovie}
                  className={`movieCard__icon movieCard__favorite ${isFavorite ? 'movieCard__favorite_active' : ''} `}/>
        }
        {
          props.place === 'saved-movies' &&
          <button type='checkbox' onClick={setFavoriteMovie}
                  className={`movieCard__icon  movieCard__deleteIcon`}/>
        }

      </div>
      <a href={props.trailerLink}
         target="_blank"
         rel="noreferrer">
        <img
          className='movieCard__img'
          src={`${
            props.image === null
              ? emptyImg
              : `https://api.nomoreparties.co${props.image.url}`
          }`}
          alt={props.nameRU}
        />
      </a>
    </div>
  )
}

export default MoviesCard;
