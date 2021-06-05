import './Navigation.css';
import NavMenu from '../NavMenu/NavMenu';
import { Link, NavLink } from "react-router-dom";

import accountImg from '../../images/accountIcon.svg';

function Navigation() {
  return(
    <>
      <div className='navigation'>
        <div className='navigation__container'>
          <ul className='navigation__buttons'>
            <li className='navigation__list'>
              <NavLink activeClassName='navigation__btn_active' to='/movies' className='navigation__btn navigation__movies-btn'>Фильмы</NavLink>
            </li>
            <li className='navigation__list'>
              <NavLink activeClassName='navigation__btn_active' to='/saved-movies' className='navigation__btn navigation__savedMovies-btn'>Сохраннёные фильмы</NavLink>
            </li>
          </ul>
          <NavLink activeClassName='navigation__btn_active' className='navigation__profile' to='/profile'>
            <img src={accountImg} alt='аккаунт' />
            Аккаунт
          </NavLink>
        </div>
      </div>
      <NavMenu />
    </>
  )
}
export default Navigation;
