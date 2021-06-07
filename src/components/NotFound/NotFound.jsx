import './NotFound.css';
import {Link} from "react-router-dom";

function NotFound() {
  return (
    <div className='notFound'>
      <div className='notFound__container'>
        <h1 className='notFound__title'>404</h1>
        <p className='notFound__description'>Страница не найдена</p>
        <Link className='notFound__btn' to='/'>Назад</Link>
      </div>
    </div>
  )

}

export default NotFound;
