import './Profile.css';

function Profile() {
  return(
    <div className='profile'>
      <div className='profile__container'>
        <h1 className='profile__title'>
          Привет, Иван!
        </h1>
        <div className='profile__inputs'>
          <div className='profile__input'>
            <p className='profile__label profile__label-name'>Имя</p>
            <p className='profile__value profile__value-name'>Иван</p>
          </div>
          <div className='profile__input'>
            <p className='profile__label profile__label-email'>E-mail</p>
            <p className='profile__value profile__value-email'>pochta@yandex.ru</p>
          </div>
        </div>
      </div>
      <div className='profile__buttons'>
        <button className='profile__btn profile__edit-btn' type='button'>Редактировать</button>
        <button className='profile__btn profile__exit-btn' type='button'>Выйти из аккаунта</button>
      </div>

    </div>
  )
}
export default Profile;
