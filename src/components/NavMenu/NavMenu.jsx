import { useState } from "react";

import './NavMenu.css';
import accountImg from '../../images/accountIcon.svg';
import {NavLink, Link} from "react-router-dom";

function NavMenu(
) {

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  function openNavMenu() {
    setIsNavMenuOpen(true);
  }

  function closeNavMenu() {
    setIsNavMenuOpen(false);
  }



  return(

    <div className='navMenu'>
      <button className='navMenu__burger' type='button' onClick={openNavMenu}/>
      <div className={`navMenu__container ${ isNavMenuOpen ? '_open-navMenu' : '' }`}>
        <button className='navMenu__close-btn' type='button' onClick={closeNavMenu}/>
        <ul className='navMenu__buttons'>
          <li className='navMenu__list'>
            <NavLink activeClassName='_activePage' to='/'>Главная</NavLink>
          </li>
          <li className='navMenu__list'>
            <NavLink activeClassName='_activePage' to='/movies'>Фильмы</NavLink>
          </li>
          <li className='navMenu__list'>
            <NavLink activeClassName='_activePage' to='/saved-movies'>Сохранённые фильмы</NavLink>
          </li>
        </ul>
        <Link className='navMenu__profile' to='/profile'>
          <img src={accountImg} alt='аккаунт' />
          Аккаунт
        </Link>
      </div>
      <div className={`navMenu__overlay ${isNavMenuOpen ? '_open-navMenu' : ''}`} onClick={closeNavMenu}/>
    </div>

  )
}
export default NavMenu;
