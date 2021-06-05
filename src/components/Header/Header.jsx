import logo from '../../images/logo.svg';
import './Header.css';

import Navigation from '../Navigation/Navigation';
import { Link } from "react-router-dom";

function Header({ place }) {
  let headSwitcher;

  switch (place) {
    case 'landing': {
      headSwitcher = '_hideNav';
      break;
    }
    case 'profile': {
      headSwitcher = '_hideContainer';
      break;
    }
    case 'saved-movies': {
      headSwitcher = '_hideContainer';
      break;
    }
    case 'movies': {
      headSwitcher = '_hideContainer';
      break;
    }
    default: {
      headSwitcher = '';
      break;
    }
  }

  return(
    <header className={`header ${ headSwitcher }`}>
      <Link className='header__logo _logo' to='/landing'>
        <img src={logo} alt='Диплом Лого' />
      </Link>
      <div className='header__container'>
        <Link className='header__singup-btn header-btn' to='/signup'>Регистрация</Link>
        <Link className='header__login-btn header-btn' to='/signin'>Войти</Link>
      </div>
      <Navigation
        place={place}
      />
    </header>
  )
}
export default Header;
