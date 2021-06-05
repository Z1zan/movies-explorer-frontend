import './Navigation.css';
import NavMenu from '../NavMenu/NavMenu';
import { Link } from "react-router-dom";

import accountImg from '../../images/accountIcon.svg';

function Navigation() {
  return(
    <>
      <div className='navigation'>
        <div className='navigation__container'>
          <ul className='navigation__buttons'>
            <li className='navigation__list'>
              <Link to='/movies' className='navigation__btn navigation__movies-btn navigation__btn_active'>Фильмы</Link>
            </li>
            <li className='navigation__list'>
              <Link to='/saved-movies' className='navigation__btn navigation__savedMovies-btn'>Сохраннёные фильмы</Link>
            </li>
          </ul>
          <Link className='navigation__profile' to='/profile'>
            <img src={accountImg} alt='аккаунт' />
            Аккаунт
          </Link>
        </div>
      </div>
      <NavMenu />
    </>
  )
}
export default Navigation;
