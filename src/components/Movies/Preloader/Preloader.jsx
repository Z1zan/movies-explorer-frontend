import './Preloader.css';
import logo from '../../../images/logo.svg'

function Preloader() {
  return(
    <div className='preloader__container'>
      <img className='preloader__img' src={logo} />
      <p>Загрузка</p>
    </div>
  )
}
export default Preloader;
