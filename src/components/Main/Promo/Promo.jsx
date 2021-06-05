import './Promo.css';
import practicumLogo from '../../../images/landingLogo.png';

function Promo() {
  return(
    <div className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <img className='promo__pic' src={practicumLogo} alt='practicumLogo' />
    </div>
  )
}
export default Promo;
