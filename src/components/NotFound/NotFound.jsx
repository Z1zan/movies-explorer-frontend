import './NotFound.css';

function NotFound() {
  return (
    <div className='notFound'>
      <div className='notFound__container'>
        <h1 className='notFound__title'>404</h1>
        <p className='notFound__description'>Страница не найдена</p>
        <a className='notFound__btn' href='/'>Назад</a>
      </div>
    </div>
  )

}

export default NotFound;
