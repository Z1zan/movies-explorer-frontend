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

  const movieApiUrl = 'https://api.nomoreparties.co'
  const emptyImg = 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80';

  const [isFavorite, setIsFavorite] = useState(false);

  function setFavoriteMovie() {
    setIsFavorite(!isFavorite);

    if (isFavorite) {
      return
    }
    const movie = {
      country: props.country,
      director: props.director,
      duration: props.duration,
      year: props.year,
      description: props.description,
      image: `${movieApiUrl}${props.image.url}`,
      trailer: props.trailerLink,
      thumbnail: `${movieApiUrl}${props.image.formats.thumbnail.url}`,
      movieId: props.id,
      nameRU: props.nameRU,
      nameEN: props.nameEN,
    }

    props.handleSaveMovie(movie);
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
          <button type='checkbox'
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
              : props.image.url === undefined
                ? props.image
                : `${movieApiUrl}${props.image.url}`
          }`}
          alt={props.nameRU}
        />
      </a>
    </div>
  )
}

export default MoviesCard;
