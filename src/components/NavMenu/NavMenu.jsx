import { useState } from "react";

import './NavMenu.css';
import accountImg from '../../images/accountIcon.svg';

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
            <a href='/'>Главная</a>
          </li>
          <li className='navMenu__list'>
            <a className='_activePage' href='/movies'>Фильмы</a>
          </li>
          <li className='navMenu__list'>
            <a href='/saved-movies'>Сохранённые фильмы</a>
          </li>
        </ul>
        <a className='navMenu__profile' href='/profile'>
          <img src={accountImg} alt='аккаунт' />
          Аккаунт
        </a>
      </div>
      <div className={`navMenu__overlay ${isNavMenuOpen ? '_open-navMenu' : ''}`} onClick={closeNavMenu}/>
    </div>

  )
}
export default NavMenu;