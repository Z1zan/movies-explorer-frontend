import './Footer.css';

function Footer() {
  return(
    <div className='footer'>
      <div className='footer__container'>
        <p className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__info'>
          <p className='footer__copyright'>&#169; 2021 Ivan Nemirich</p>
          <ul className='footer__links'>
            <li className='footer__link'><a href='https://praktikum.yandex.ru/'>Яндекс.Практикум</a></li>
            <li className='footer__link'><a href='https://github.com/'>Github</a></li>
            <li className='footer__link'><a href='https://facebook.com/'>Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Footer;
