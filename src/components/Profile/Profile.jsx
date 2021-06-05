import {useContext, useEffect, useState} from "react";

import './Profile.css';
import Header from "../Header/Header";

import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Profile(props) {

  const currentUser = useContext(CurrentUserContext);

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);

  useEffect(() => {
    setEmail(currentUser.email);
    setName(currentUser.name);
  }, [])

  function handleChangeEmail(e) {
    setEmail(e.target.value)

    const val = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!e.target.value) {
      setEmailError('Email не может быть пустым');
      setEmailValid(false);
    } else if (!val.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email');
      setEmailValid(false);
    } else {
      setEmailError('');
      setEmailValid(true);
    }
  }
  function handleChangeName(e) {
    setName(e.target.value)

    if(!e.target.value) {
      setNameError('Имя не может быть пустым')
      setNameValid(false);
    } else if (e.target.value.length <= 2) {
      setNameError('Имя должно быть больше 2-х символов')
      setNameValid(false);
    } else {
      setNameError('')
      setNameValid(true);
    }
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
      <Header loggedIn={props.loggedIn}/>
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
              <span className='form__error profile__error'>{nameError}</span>

            </div>
            <div className='profile__input'>
              <p className='profile__label profile__label-email'>E-mail</p>

              <input onChange={handleChangeEmail} value={email} className='profile__value profile__value-email' type='email'
                     name='email'
                     required='' minLength='2' maxLength='30' />
              <span className='form__error profile__error'>{emailError}</span>

            </div>
          </div>
        </div>
        <div className='profile__buttons'>
          <button onClick={handleSubmit}  type='submit'
                  className={ `profile__btn profile__edit-btn ${emailValid && nameValid ? '' : '_unactiveProfile'}`}
                  disabled={emailValid && nameValid ? false : true}
          >
            Редактировать
          </button>
          <button onClick={props.handleSignOut} className='profile__btn profile__exit-btn' type='button'>Выйти из аккаунта</button>
        </div>

      </div>
    </>
  )
}

export default Profile;
