import { useState } from "react";

import './NavMenu.css';
import accountImg from '../../images/accountIcon.svg';
import {Link} from "react-router-dom";

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
            <Link to='/landing'>Главная</Link>
          </li>
          <li className='navMenu__list'>
            <Link className='_activePage' to='/movies'>Фильмы</Link>
          </li>
          <li className='navMenu__list'>
            <Link to='/saved-movies'>Сохранённые фильмы</Link>
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
