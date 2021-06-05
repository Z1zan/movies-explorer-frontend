import logo from '../../images/logo.svg';
import './Header.css';

import Navigation from '../Navigation/Navigation';
import { Link } from "react-router-dom";

function Header(props) {

  return(
    <header className={`header ${ props.loggedIn ? '_hideContainer' : '_hideNav'} `}>
      <Link className='header__logo _logo' to='/landing'>
        <img src={logo} alt='Диплом Лого' />
      </Link>
      <div className='header__container'>
        <Link className='header__singup-btn header-btn' to='/signup'>Регистрация</Link>
        <Link className='header__login-btn header-btn' to='/signin'>Войти</Link>
      </div>
      <Navigation/>
    </header>
  )
}
export default Header;
