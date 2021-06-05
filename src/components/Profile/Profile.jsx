import {useContext, useEffect, useState} from "react";

import './Profile.css';
import Header from "../Header/Header";

import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Profile(props) {

  const currentUser = useContext(CurrentUserContext);

  const [email, setEmail] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    setEmail(currentUser.email);
    setName(currentUser.name);
  }, [])

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }
  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onChangeProfile({
      email,
      name
    });
  }


  return (
    <>
      <Header place={props.place}/>
      <div className='profile'>
        <div className='profile__container'>
          <h1 className='profile__title'>
            Привет, {currentUser.name}!
          </h1>
          <div className='profile__inputs'>
            <div className='profile__input'>
              <p className='profile__label profile__label-name'>Имя</p>

              <input onChange={handleChangeName} value={name} className='profile__value profile__value-name' type='name'
                     name='email'
                     required='' minLength='2' maxLength='30' />
              <span className='form__error profile__error'>Где Имя Лебовский?</span>

            </div>
            <div className='profile__input'>
              <p className='profile__label profile__label-email'>E-mail</p>

              <input onChange={handleChangeEmail} value={email} className='profile__value profile__value-email' type='email'
                     name='email'
                     required='' minLength='2' maxLength='30' />
              <span className='form__error profile__error'>Где email Лебовский?</span>

            </div>
          </div>
        </div>
        <div className='profile__buttons'>
          <button onClick={handleSubmit} className='profile__btn profile__edit-btn' type='submit'>Редактировать</button>
          <button onClick={props.handleSignOut} className='profile__btn profile__exit-btn' type='button'>Выйти из аккаунта</button>
        </div>

      </div>
    </>
  )
}

export default Profile;
