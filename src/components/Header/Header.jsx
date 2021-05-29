import logo from '../../images/logo.svg';
import './Header.css';

import Navigation from '../Navigation/Navigation';

function Header() {
  return(
    <header className='header'>
      <a className='header__logo _logo' href='/'>
        <img src={logo} alt='Диплом Лого' />
      </a>
      <div className='header__container'>
        <a className='header__singup-btn header-btn' href='/signup'>Регистрация</a>
        <a className='header__login-btn header-btn' href='/signin'>Войти</a>
      </div>
      <Navigation />
    </header>
  )
}
export default Header;
