import './Footer.css';

function Footer() {
  return(
    <div className='footer'>
      <div className='footer__container'>
        <p className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__info'>
          <p className='footer__copyright'>&#169; 2021 Ivan Nemirich</p>
          <ul className='footer__links'>
            <li className='footer__link'><a href='#'>Яндекс.Практикум</a></li>
            <li className='footer__link'><a href='#'>Github</a></li>
            <li className='footer__link'><a href='#'>Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Footer;
