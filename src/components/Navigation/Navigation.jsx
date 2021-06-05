import './Navigation.css';
import NavMenu from '../NavMenu/NavMenu';

import accountImg from '../../images/accountIcon.svg';

function Navigation() {
  return(
    <>
      <div className='navigation'>
        <div className='navigation__container'>
          <ul className='navigation__buttons'>
            <li className='navigation__list'>
              <a href='/movies' className='navigation__btn navigation__movies-btn navigation__btn_active'>Фильмы</a>
            </li>
            <li className='navigation__list'>
              <a href='/saved-movies' className='navigation__btn navigation__savedMovies-btn'>Сохраннёные фильмы</a>
            </li>
          </ul>
          <a className='navigation__profile' href='/profile'>
            <img src={accountImg} alt='аккаунт' />
            Аккаунт
          </a>
        </div>
      </div>
      <NavMenu />
    </>
  )
}
export default Navigation;
