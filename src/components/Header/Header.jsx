import logo from '../../images/logo.svg';
import './Header.css';

import Navigation from '../Navigation/Navigation';

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
      <a className='header__logo _logo' href='/'>
        <img src={logo} alt='Диплом Лого' />
      </a>
      <div className='header__container'>
        <a className='header__singup-btn header-btn' href='/signup'>Регистрация</a>
        <a className='header__login-btn header-btn' href='/signin'>Войти</a>
      </div>
      <Navigation
        place={place}
      />
    </header>
  )
}
export default Header;
